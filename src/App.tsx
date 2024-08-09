import { getYear } from "date-fns";

import { Divider } from "@geist-ui/core";

import { Hitokoto } from "./components/HiTokoto";
import SystemIno from "./components/SystemInfo";
import { BreathOfWild } from "./components/Online";
import { req } from "./req";

function App() {
  return (
    <div className="min-h-100vh pt-70px px-4 max-w-5xl mx-auto relative pb-70">
      <header className="fixed top-0 right-0 left-0 z-999 blur-bg">
        <div className="flex justify-between items-center p-4 max-w-5xl mx-auto h-60px">
          <div>
            <h3 className="mb-0 font-bold text-7">far.</h3>
          </div>
          <div className="text-right text-0.9rem lt-md:w-50% mt-1">
            <Hitokoto />
          </div>
        </div>
        <div className="w-100% border-b border-current absolute top-60px op-5" />
        <Divider className="!m-0 dark:op-80 !dark:bg-#1D1D1D" />
      </header>
      <main className="mt-8">
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
            <span className="op-100 ">©&nbsp;{getYear(new Date())} </span>
            PowerBy&nbsp;
            <a className="link" href="https://github.com/charlzyx">
              charlzyx
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
