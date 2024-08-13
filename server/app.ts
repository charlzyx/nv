import { $ } from "bun";
import path from "node:path";
import * as systeminformation from "systeminformation";

const PUBIC = path.resolve(import.meta.dir, "../dist");

$.throws(false);

const cacheBlack: Record<string, boolean> = {
  networkStats: true,
  fsSize: true,
  mem: true,
};

const cached: Record<string, any> = {};

const routes: Record<
  string,
  (req: Request) => Response | Promise<Response> | any
> = {
  "/prometheus": async (req) => {
    const exp_rx = `irate(node_network_receive_bytes_total{job="路由器",instance=~'10.5.6.1:9100',device=\"pppoe-wan\"}[5m])`;
    const exp_tx = `irate(node_network_transmit_bytes_total{job="路由器",instance=~'10.5.6.1:9100',device=\"pppoe-wan\"}[5m])`;
    const exp_boot = `node_boot_time_seconds{job="路由器"}`;

    const [rx, tx, boot] = await Promise.all([
      fetch(
        `http://10.5.6.12:9090/api/v1/query?query=${encodeURIComponent(exp_rx)}`
      )
        .then((resp) => resp.json())
        .then((ret) => ret?.data?.result?.[0].value?.[1]),
      fetch(
        `http://10.5.6.12:9090/api/v1/query?query=${encodeURIComponent(exp_tx)}`
      )
        .then((resp) => resp.json())
        .then((ret) => ret?.data?.result?.[0].value?.[1]),
      fetch(
        `http://10.5.6.12:9090/api/v1/query?query=${encodeURIComponent(
          exp_boot
        )}`
      )
        .then((resp) => resp.json())
        .then((ret) => ret?.data?.result?.[0].value?.[1]),
    ]);
    return {
      rx: +rx,
      tx: +tx,
      boot: +boot,
    };
  },
  "/hitokoto": async (req) => {
    const resp = await fetch("https://v1.hitokoto.cn/?c=a", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
      },
    });
    const data = await resp.json();
    return data;
  },
  "/要相信光啊": async (req) => {
    await $`awake 24:4b:fe:5a:6a:14`.text();
    return true;
  },
  "/wolstatus": async (req) => {
    const output = await $`ping 10.5.6.5 -c 2 -w 1`.text();
    const offline = output.includes("100% packet loss");
    return offline ? "offline" : "online";
  },
  "/update": async (req) => {
    await $`cd /opt/nv
    wget https://github.com/charlzyx/nv/releases/download/master/nv.tar.gz -O nv.tar.gz
    tar -xvf nv.tar.gz 
    bun i --production
    service nv restart`;
  },
  "/si": async (req) => {
    const url = new URL(req.url);
    const fn = url.searchParams.get("fn") || "EMPTY_FN_PARAM";
    if (fn === "EMPTY_FN_PARAM") {
      throw "BAD_PARAM_FN";
    }
    const cacheYou = cacheBlack[fn] ? false : cached[fn];
    if (cacheYou) {
      return Promise.resolve(cacheYou);
    }
    return Promise.resolve((systeminformation as any)[fn]()).then((data) => {
      if (data?.networkConnections) {
        delete data?.networkConnections;
      }
      if (data?.processes) {
        delete data?.processes;
      }
      cached[fn] = data;
      return data;
    });
  },
};

Bun.serve({
  port: 8080,
  async fetch(req, res) {
    const url = new URL(req.url);
    if (!/^\/api/.test(url.pathname)) {
      try {
        const filePath =
          url.pathname === "/" ? PUBIC + "/index.html" : PUBIC + url.pathname;
        const file = Bun.file(filePath);
        const exists = await file.exists();
        if (!exists) {
          return Response.redirect("/");
        }
        return new Response(file);
      } catch (error) {
        return Response.redirect("/");
      }
    }
    const matcher = decodeURIComponent(url.pathname.replace(/^\/api/, ""));
    const [name, handler] =
      Object.entries(routes).find(([key, handler]) => {
        return key === matcher;
      }) || [];

    if (!handler) {
      return Response.json({ code: 404, reason: "BAD URL" });
    }

    try {
      const resp = await handler(req);
      return Response.json({ code: 200, data: resp });
    } catch (error) {
      return Response.json({
        code: 502,
        reason: name + " ERROR: " + error?.toString(),
      });
    }
  },
});

console.log("server on 8080");
