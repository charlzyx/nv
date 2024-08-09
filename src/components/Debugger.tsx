import { useState } from "react";

import { fns } from "./fns";
import { req } from "../req";

function App() {
  const [ret, setRet] = useState({});
  return (
    <div className="min-h-100vh pt-70px px-4 max-w-5xl mx-auto relative pb-70">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
        }}
      >
        {fns.map((ff) => {
          return (
            <div
              onClick={() => {
                req(`/si?fn=${ff}`).then(setRet);
              }}
              style={{
                padding: 10,
                margin: 10,
              }}
            >
              {ff}
            </div>
          );
        })}
      </div>
      <div style={{ border: "#c2c2c2 1px solid", borderRadius: 10 }}>
        <pre>
          <code>{JSON.stringify(ret, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
