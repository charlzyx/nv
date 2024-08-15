import { Divider } from "@geist-ui/core";
import { getYear } from "date-fns";
import { Hitokoto } from "./components/HiTokoto";
import { BreathOfWild } from "./components/Online";
import SystemIno, { BaseInfo } from "./components/SystemInfo";
import { Links } from "./components/Links";

function App() {
  return (
    <div className="h-100vh pt-20px px-4 max-w-5xl mx-auto relative">
      <header>
        <div className="p-4 max-w-5xl mx-auto">
          <BaseInfo>
            <BreathOfWild></BreathOfWild>
          </BaseInfo>
          <Divider></Divider>
          <div className="text-right text-0.9rem mt-1">
            <Hitokoto />
          </div>
        </div>
      </header>
      <main className="p-4">
        <div className="font-300 text-13px flex justify-between items-end w-full">
          <Links />
        </div>
        <Divider className="mt-8"></Divider>
        <div className="mt-8 font-300 text-13px flex justify-between items-end w-full">
          <SystemIno />
        </div>
      </main>
      <footer className="op-60 mt-8 absolute bottom-4 right-4 left-0">
        <div className="font-300 text-13px flex justify-between items-end w-full">
          <div className="w-20"></div>
          <div className="text-right dark:op-60">
            <div className="custom-bg" />
            <div className="mt-2 flex align-center">
              <div className="i-carbon:bat text-4 mr-3 mt-1" />
              <a className="link">Nothing to fear. </a>
            </div>
            <a href="https://github.com/charlzyx">
              <div className="mt-2 flex align-center lh-4">
                <div className="i-carbon:logo-github text-4 mr-3 mt-0" />
                <span className="op-100 lh-5">
                  ©&nbsp;{getYear(new Date())}&nbsp; Power By&nbsp;
                </span>
                <a className="link "> charlzyx </a>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
