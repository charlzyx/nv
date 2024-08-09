import useSWR from "swr";
import { req } from "../req";

export const BreathOfWild = () => {
  const { data } = useSWR("/wolstatus", req, {
    refreshInterval: 10 * 1000,
  });
  return (
    <div
      className={`breath-of-the-wild${data === "online" ? "-" + data : ""}`}
    ></div>
  );
};
