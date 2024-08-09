import { getYear } from "date-fns";

import { Divider } from "@geist-ui/core";

import { Hitokoto } from "./components/HiTokoto";
import SystemIno, { BaseInfo } from "./components/SystemInfo";
import { BreathOfWild } from "./components/Online";
import { req } from "./req";

function App() {
  return (
    <div className="min-h-100vh pt-40px px-4 max-w-5xl mx-auto relative pb-70">
      <header>
        <div className="p-4 max-w-5xl mx-auto">
          <BaseInfo></BaseInfo>
          <Divider></Divider>
          <div className="text-right text-0.9rem mt-1">
            <Hitokoto />
          </div>
        </div>
      </header>
      <main className="mt-8 p-4">
        <div className="font-300 text-13px flex justify-between items-end w-full">
          <div className="w-full">
            <div className="ml-4px">
              <SystemIno />
            </div>
          </div>
        </div>
      </main>
      <footer className=" max-w-5xl mx-auto p-3 op-60 mt-8 absolute bottom-2 right-0 left-0">
        <div className="font-300 text-13px flex justify-between items-end w-full">
          <div className="w-20"></div>
          <div className="text-right dark:op-60">
            <div
              onClick={() => {
                req("/wol");
              }}
              className="custom-bg"
            />
            <BreathOfWild></BreathOfWild>
            <div className="mt-2 flex align-center">
              <div className="i-carbon:bat text-4 mr-3 mt-1" />
              <a className="link">Nothing to fear. </a>
            </div>
            <a  href="https://github.com/charlzyx">
              <div className="mt-2 flex align-center">
                <div className="i-carbon:logo-github text-4 mr-3 mt-0" />
                <span className="op-100">©&nbsp;{getYear(new Date())} </span>
                PowerBy&nbsp;
                <a className="link"> charlzyx </a>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
