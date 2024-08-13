export const parseMetric = (metricsData: string = "") => {
  // 解析并整理指标数据
  const kvMap: any = {
    node_boot_time_seconds: "boot",
    'node_network_receive_bytes_total{device="pppoe-wan"}': "rx",
    'node_network_transmit_bytes_total{device="pppoe-wan"}': "tx",
  };
  const ret: any = {};
  const lines = metricsData.split("\n");

  lines.forEach((line) => {
    if (line.startsWith("#") || line.trim() === "") {
      return; // 跳过注释和空行
    }

    let [metricName, metricValue] = line.split(/\s+/);
    // const labelMatcher = /{(.*)}/;
    // const labelMatch = line.match(labelMatcher);

    // let metricName = parts[0];
    metricValue = parseFloat(metricValue);
    const kv = kvMap[metricName];
    if (kv) {
      ret[kv] = metricValue;
    }
  });

  // 打印整理后的 JSON 对象
  return ret;
};
