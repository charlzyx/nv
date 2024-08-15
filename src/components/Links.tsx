import { Divider, Link } from "@geist-ui/core";

const isLAN = /localhost|(\d+.){3}\d+$/.test(window.location.host);

const data = [
  {
    label: "小米 6500BE Pro",
    desc: "路由器",
    link: "http://10.5.6.1",
  },
  {
    label: "AirLAN",
    desc: "像呼吸一样自然",
    link: "http://10.5.6.10/",
  },
  {
    label: "Clash",
    desc: "和自由自在",
    link: "http://10.5.6.1:9999/ui",
  },
  {
    label: "Grafana看板",
    desc: "正经人谁会给路由器接入Grafana啊",
    link: "http://10.5.6.12:3000",
    outlink: "https://up.tail38d3d.ts.net/",
  },
  {
    label: "路由器的指标",
    desc: "对吧 node_exporter",
    link: "http://10.5.6.1:9100/metrics",
  },
  {
    label: "迅雷下载",
    desc: "你相信光吗",
    link: "http://10.5.6.11:2345/",
  },
  {
    label: "alist",
    desc: "要相信光啊",
    link: "http://10.5.6.11:5244/",
  },
];

export const Links = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
      {data.map((item) => {
        const show = isLAN || item.outlink;
        return show ? (
          <a
            href={isLAN ? item.link : item.outlink}
            key={item.link}
            target="__blank"
          >
            <div className="">
              <div className="text-4 mb-4">
                <span className="link">- {item.label}</span>
              </div>
              <div className="ml-4">{item.desc}</div>
            </div>
          </a>
        ) : null;
      })}
    </div>
  );
};
