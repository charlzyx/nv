import { useMemo } from "react";
import * as si from "../components/useSi";
import { Divider } from "@geist-ui/core";

const units = ["b", "KB", "MB", "GB", "TB"];
const upper = (x?: string) => (x ? x.replace(/\w/, (m) => m.toUpperCase()) : x);
const readable = (x: number, toFixed = 2) => {
  if (Number.isNaN(+x)) return "";
  let n = x ?? 0;

  let uidx = 0;
  while (n > 1024) {
    n = n / 1024;
    uidx++;
  }
  return n.toFixed(toFixed) + units[uidx];
};

const cent = (a: number, b: number) => {
  return (((a || 0) / (b || 1)) * 100).toFixed(2);
};

const Code = (props: { title: string; data: any }) => {
  return (
    <>
      <label>{props.title}</label>
      <pre>
        <code>{props.data ? JSON.stringify(props.data, null, 2) : "--"}</code>
      </pre>
    </>
  );
};

export default function SystemIno() {
  const { data: os } = si.useOsInfo();
  const { data: system } = si.useSystem();
  const { data: mem } = si.useMem();
  const { data: memLayout } = si.useMemLayout();
  const { data: disk } = si.useDiskLayout();
  const { data: fsSize } = si.useFsSize();
  const { data: networkStatus } = si.useNetworkStats();
  const { data: baseBoard } = si.useBaseboard();
  const { data: graphics } = si.useGraphics();
  const { data: cpu } = si.useCpu();
  const { data: ifaces } = si.useNetworkInterfaces();

  const graphic = useMemo(() => {
    return graphics?.controllers?.[0] ?? null;
  }, [graphics]);

  return (
    <div className="children:mb-4 text-3.2 lh-4.4">
      <div className="flex justify-between">
        <div>
          <div className="text-6 mb-3">
            {system?.manufacturer}&reg; {system?.model} {system?.version}
          </div>
          <div className="text-3.2">
            {upper(os?.distro)} @{os?.hostname} {os?.arch}.{os?.platform}
          </div>
        </div>
        <div>
          <div className="flex items-top">
            <div className="i-carbon:server-proxy text-4 mr-3" />
            <div>
              {networkStatus?.map((net) => {
                return (
                  <div className="flex text-4 mb-2 justify-between">
                    <div>
                      {
                        (ifaces as any)?.find?.(
                          (ff: any) => ff.iface === net.iface
                        )?.ip4
                      }{" "}
                      {net.iface}
                    </div>
                    <div>
                      Rx {readable(net.rx_sec!)}/s Tx {readable(net.tx_sec!)}/s
                    </div>
                  </div>
                );
              })}
              <div>
                {(ifaces as any)?.map((iface: any) => {
                  return iface.ip4 && iface.ip4 != "127.0.0.1" ? (
                    <div className="flex">
                      <div className="w-20">{iface?.iface}</div>
                      <div className="w-32">{iface.ip4}</div>
                      {iface.ip6}
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider></Divider>

      <div className="flex items-top">
        <div className="i-carbon:edge-node text-4 mr-3 mt-0.5" />
        <div className="text-3.8 mr-4 w-12">
          主<span className="op-0">要</span>板
        </div>
        <div>
          <div className="text-4 mb-2">
            {baseBoard?.manufacturer}&reg; {baseBoard?.model}
          </div>

          <div>
            序列号
            {baseBoard?.serial}
          </div>
        </div>
      </div>

      <div className="flex items-top">
        <div className="i-carbon:chip text-4 mr-3 mt-0.5" />
        <div className="text-3.8 mr-4 w-12">处理器</div>
        <div>
          <div className="text-4 mb-2">
            {cpu?.manufacturer}&reg; {cpu?.model} {cpu?.brand}
          </div>
          <div>
            {cpu?.physicalCores}核 @{cpu?.speed}GHz {cpu?.processors}线程
          </div>
        </div>
      </div>
      <div className="flex items-top">
        <div className="i-carbon:rocket text-4 mr-3 mt-0.5" />
        <div className="text-3.8 mr-4 w-12">
          内<span className="op-0">条</span>存
        </div>
        <div>
          <div className="text-4 mb-2">
            {mem ? cent(mem.available, mem.total) : 0}% &nbsp;
            {readable(mem?.available!)}/{readable(mem?.total!)}
          </div>
          {memLayout?.map((ml) => {
            return (
              <div>
                <div>
                  {ml?.manufacturer}&reg; {ml?.type} {readable(ml.size)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-top">
        <div className="i-carbon:archive text-4 mr-3 mt-0.5" />
        <div className="text-3.8 mr-4 w-12">
          磁<span className="op-0">软</span>盘
        </div>
        <div>
          {disk?.map((dd) => {
            return (
              <div className="text-4 mb-2">
                <div>
                  {dd?.name}&reg; {dd?.type} {readable(dd.size)}
                </div>
              </div>
            );
          })}
          {fsSize?.map((pp) => {
            return /cloud/.test(pp.mount) ? (
              <div className="flex">
                <div className="w-20">{cent(pp.available, pp.size)}%</div>
                <div className="w-30">{readable(pp.available)}</div>
                <div className="w-30">{readable(pp.size)}</div>
                <div className="w-100">{pp.mount}</div>
              </div>
            ) : null;
          })}
        </div>
      </div>
      {graphic ? (
        <div className="flex items-top">
          <div className="i-carbon:4k text-4 mr-3 mt-0.5" />
          <div className="text-3.8 mr-4 w-12">
            显<span className="op-0">卡</span>卡
          </div>
          <div>
            <div className="text-4 mb-2">
              {graphic?.vendor}&reg; {graphic?.model}
            </div>
            <div>
              <div>
                {graphic?.cores}核 {readable(graphic?.memoryFree!)}/
                {readable(graphic?.memoryTotal!)}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Divider></Divider>
    </div>
  );
}
