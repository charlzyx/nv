import { useEffect, useMemo } from "react";
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

export const BaseInfo = (props: { children: React.ReactNode }) => {
  const { data: os } = si.useOsInfo();
  const { data: system } = si.useSystem();
  const { data: networkStatus } = si.useNetworkStats();
  // const { data: ifaces } = si.useNetworkInterfaces();
  useEffect(() => {
    window.document.title = `Far.${system?.manufacturer}® ${system?.model} ${system?.version}`;
  }, [system]);

  return (
    <div className="flex justify-between text-3">
      <div>
        <div className="flex text-5 mb-2 mt-3 lh-8">
          <div className="i-carbon:airplay text-6 mr-2" />
          <div className="flex mr-2 mt-2">{props.children}</div>
          {system?.manufacturer}&reg; {system?.model} {system?.version}
        </div>
        <div className="text-3">
          {upper(os?.distro)} @{os?.hostname} {os?.arch}.{os?.platform}
        </div>
        <div className="flex mt-2">
          <div className="i-carbon:server-proxy text-4 mr-3" />
          <div>
            {networkStatus?.map((net) => {
              return (
                <div>
                  <div>
                    Rx {readable(net.rx_sec!)}/s Tx {readable(net.tx_sec!)}/s
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SystemIno() {
  const { data: mem } = si.useMem();
  const { data: memLayout } = si.useMemLayout();
  const { data: disk } = si.useDiskLayout();
  const { data: fsSize } = si.useFsSize();
  // const { data: baseBoard } = si.useBaseboard();
  const { data: graphics } = si.useGraphics();
  const { data: cpu } = si.useCpu();

  const graphic = useMemo(() => {
    return graphics?.controllers?.[0] ?? null;
  }, [graphics]);

  return (
    <div className="children:mb-4 text-3.2 lh-4.4">
      <div className="flex items-top sm:flex-row flex-col children:mb-2">
        <div className="i-carbon:chip text-4 mr-3 mt-0.5" />
        <div className="flex text-3.8 mr-4 w-12 keepword">处理器</div>
        <div>
          <div className="text-4 mb-2">
            {cpu?.manufacturer}&reg; {cpu?.brand}
          </div>
          <div>
            {cpu?.physicalCores} 核 @{cpu?.speed}GHz {cpu?.cores} 线程
          </div>
        </div>
      </div>
      <div className="flex items-top sm:flex-row flex-col children:mb-2">
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg
          className="mr-3"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 640 512"
          height="1rem"
          width="1rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M640 130.94V96c0-17.67-14.33-32-32-32H32C14.33 64 0 78.33 0 96v34.94c18.6 6.61 32 24.19 32 45.06s-13.4 38.45-32 45.06V320h640v-98.94c-18.6-6.61-32-24.19-32-45.06s13.4-38.45 32-45.06zM224 256h-64V128h64v128zm128 0h-64V128h64v128zm128 0h-64V128h64v128zM0 448h64v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h64v-96H0v96z" />
        </svg>
        {/* <div className="i-carbon:edge-node text-4 mr-3 mt-0.5" /> */}
        <div className="text-3.8 mr-4 w-12 keepword">
          内<span className="op-0">条</span>存
        </div>
        <div>
          <div className="text-4 mb-2">
            {mem ? cent(mem.free, mem.total) : 0}% Free &nbsp;
            {readable(mem?.total!)}
          </div>
          {memLayout?.map((ml) => {
            return ml.manufacturer ? (
              <div>
                <div>
                  {ml?.manufacturer} {ml?.type} {readable(ml.size)}
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>

      <div className="flex items-top sm:flex-row flex-col children:mb-2">
        <div className="i-carbon:archive text-4 mr-3 mt-0.5" />
        <div className="text-3.8 mr-4 w-12 keepword">
          硬<span className="op-0">软</span>盘
        </div>
        <div>
          {disk?.map((dd) => {
            return (
              <div className="text-4 mb-2 ">
                {dd?.name} {dd?.type} {readable(dd.size)}
              </div>
            );
          })}
          {fsSize?.map((pp) => {
            return /cloud/.test(pp.mount) ? (
              <div className="flex flex-gap-8">
                <div>{cent(pp.available, pp.size)}%</div>
                <div>{readable(pp.available)}</div>
                <div>{readable(pp.size)}</div>
                <div>{pp.mount}</div>
              </div>
            ) : null;
          })}
        </div>
      </div>
      {graphic ? (
        <div className="flex items-top sm:flex-row flex-col children:mb-2">
          <div className="i-carbon:4k text-4 mr-3 mt-0.5" />
          <div className="text-3.8 mr-4 w-12 keepword">
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
