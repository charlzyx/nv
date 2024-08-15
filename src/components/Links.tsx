import { Divider, Link } from "@geist-ui/core";
import {} from "react";

const data = [
	{
		label: "Grafana",
		desc: "正经人谁会给路由器接入Grafana啊",
		link: "http://10.5.6.12:3000",
	},
	{
		label: "Node Exporter",
		desc: "对吧 node_exporter",
		link: "http://10.5.6.12:9100",
	},
	{
		label: "yacd",
		desc: "YMCA~~(不是)",
		link: "http://10.5.6.1:9999/ui",
	},
	{
		label: "漏油器",
		desc: "小米 6500BE Pro",
		link: "http://10.5.6.1",
	},
	{
		label: "AirLAN",
		desc: "OpenWrt Lite",
		link: "http://10.5.6.10/",
	},
	{
		label: "迅雷",
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
				return (
					<a href={item.link} key={item.link} target="__blank">
						<div className="">
							<div className="text-4 mb-4">
								<span className="link">- {item.label}</span>
							</div>
							<div>{item.desc}</div>
						</div>
					</a>
				);
			})}
		</div>
	);
};
