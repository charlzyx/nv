import { Divider, Loading } from "@geist-ui/core";

import { useEffect, useState } from "react";
import { req } from "../req";

/*
 * 数据来源于 Hitokoto，感谢免费分享
 * {@link https://hitokoto.cn/}
 */

export const useHitokoto = () => {
  const [data, setData] = useState({ hitokoto: "", from: "" });
  const [error, setError] = useState(false);

  useEffect(() => {
    req("/hitokoto")
      .then((res) => (res ? setData(res) : setData({
        from: '食戟之灵',
        hitokoto: '从进入厨房的瞬间开始，你们就肩负着烹饪美食的责任。'
      })))
      .catch(() => {
        setData({
          from: '食戟之灵',
          hitokoto: '从进入厨房的瞬间开始，你们就肩负着烹饪美食的责任。'
        })
      });
    // .catch(() => setError(true));
  }, []);

  return [data, error] as const;
};

export const Hitokoto = () => {
  const [hi, error] = useHitokoto();
  if (error) return null;

  return hi.hitokoto ? (
    <>
      {hi.hitokoto}
      <p className="text-2.5 my-1 op-60">来源: {hi.from}</p>
    </>
  ) : (
    <div className="">
      一言加载中
      <Loading />
    </div>
  );
};
