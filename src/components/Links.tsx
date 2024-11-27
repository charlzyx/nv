import { Divider, Link } from "@geist-ui/core";

const isLAN = /localhost|(\d+.){3}\d+$/.test(window.location.host);

const data = [
  {
    label: "Mi.wifi",
    desc: "小米 6500BE Pro",
    link: "http://10.5.6.1",
  },
  {
    label: "Air.LAN",
    desc: "像呼吸一样自然",
    link: "http://10.5.6.2/",
  },
  {
    label: "Clash.UI",
    desc: "和自由自在",
    link: "http://10.5.6.1:9999/ui",
  },
  {
    label: "Docker.Panel",
    link: "http://10.5.6.7:8808",
    outlink: "https://dpanel.charlzyx.xyz/",
  },
  {
    label: "Proxmox.VE",
    link: "https://10.5.6.66:8006",
    outlink: "https://pve.charlzyx.xyz/",
  },
  {
    label: "飞牛.NAS",
    link: "http://10.5.6.3",
    outlink: "https://fnos.charlzyx.xyz/",
  },
  {
    label: "Safeline",
    link: "https://10.5.6.7:9443",
    outlink: "https://safeline.charlzyx.xyz/",
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
