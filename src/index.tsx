import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "virtual:uno.css";
import App from "./App";
import { SWRConfig } from "swr";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        refreshWhenHidden: false,
        revalidateOnFocus: false,
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);
