import useSWR from "swr";
import { req } from "../req";

import type {
  version,
  system,
  bios,
  baseboard,
  chassis,
  time,
  osInfo,
  versions,
  shell,
  uuid,
  cpu,
  cpuFlags,
  cpuCache,
  cpuCurrentSpeed,
  cpuTemperature,
  currentLoad,
  fullLoad,
  mem,
  memLayout,
  battery,
  graphics,
  fsSize,
  fsOpenFiles,
  blockDevices,
  fsStats,
  disksIO,
  diskLayout,
  networkInterfaceDefault,
  networkGatewayDefault,
  networkInterfaces,
  networkStats,
  networkConnections,
  inetChecksite,
  inetLatency,
  wifiNetworks,
  wifiInterfaces,
  wifiConnections,
  users,
  processes,
  processLoad,
  services,
  dockerInfo,
  dockerImages,
  dockerContainers,
  dockerContainerStats,
  dockerContainerProcesses,
  dockerVolumes,
  dockerAll,
  vboxInfo,
  printer,
  usb,
  audio,
  bluetoothDevices,
  getStaticData,
  getDynamicData,
  getAllData,
  get,
  observe,
  powerShellStart,
  powerShellRelease,
} from "systeminformation";

export function useVersion() {
  return useSWR<Awaited<ReturnType<typeof version>>>("/si?fn=version", req);
}
export function useSystem() {
  return useSWR<Awaited<ReturnType<typeof system>>>("/si?fn=system", req);
}
export function useUios() {
  return useSWR<Awaited<ReturnType<typeof bios>>>("/si?fn=bios", req);
}
export function useBaseboard() {
  return useSWR<Awaited<ReturnType<typeof baseboard>>>("/si?fn=baseboard", req);
}
export function useChassis() {
  return useSWR<Awaited<ReturnType<typeof chassis>>>("/si?fn=chassis", req);
}
export function useTime() {
  return useSWR<Awaited<ReturnType<typeof time>>>("/si?fn=time", req);
}
export function useOsInfo() {
  return useSWR<Awaited<ReturnType<typeof osInfo>>>("/si?fn=osInfo", req);
}
export function useVersions() {
  return useSWR<Awaited<ReturnType<typeof versions>>>("/si?fn=versions", req);
}
export function useShell() {
  return useSWR<Awaited<ReturnType<typeof shell>>>("/si?fn=shell", req);
}
export function useUuid() {
  return useSWR<Awaited<ReturnType<typeof uuid>>>("/si?fn=uuid", req);
}
export function useCpu() {
  return useSWR<Awaited<ReturnType<typeof cpu>>>("/si?fn=cpu", req);
}
export function useCpuFlags() {
  return useSWR<Awaited<ReturnType<typeof cpuFlags>>>("/si?fn=cpuFlags", req);
}
export function useCpuCache() {
  return useSWR<Awaited<ReturnType<typeof cpuCache>>>("/si?fn=cpuCache", req);
}
export function useCpuCurrentSpeed() {
  return useSWR<Awaited<ReturnType<typeof cpuCurrentSpeed>>>(
    "/si?fn=cpuCurrentSpeed",
    req
  );
}
export function useCpuTemperature() {
  return useSWR<Awaited<ReturnType<typeof cpuTemperature>>>(
    "/si?fn=cpuTemperature",
    req
  );
}
export function useCurrentLoad() {
  return useSWR<Awaited<ReturnType<typeof currentLoad>>>(
    "/si?fn=currentLoad",
    req
  );
}
export function useFullLoad() {
  return useSWR<Awaited<ReturnType<typeof fullLoad>>>("/si?fn=fullLoad", req);
}
export function useMem() {
  return useSWR<Awaited<ReturnType<typeof mem>>>("/si?fn=mem", req);
}
export function useMemLayout() {
  return useSWR<Awaited<ReturnType<typeof memLayout>>>("/si?fn=memLayout", req);
}
export function useBattery() {
  return useSWR<Awaited<ReturnType<typeof battery>>>("/si?fn=battery", req);
}
export function useGraphics() {
  return useSWR<Awaited<ReturnType<typeof graphics>>>("/si?fn=graphics", req);
}
export function useFsSize() {
  return useSWR<Awaited<ReturnType<typeof fsSize>>>("/si?fn=fsSize", req);
}
export function useFsOpenFiles() {
  return useSWR<Awaited<ReturnType<typeof fsOpenFiles>>>(
    "/si?fn=fsOpenFiles",
    req
  );
}
export function useBlockDevices() {
  return useSWR<Awaited<ReturnType<typeof blockDevices>>>(
    "/si?fn=blockDevices",
    req
  );
}
export function useFsStats() {
  return useSWR<Awaited<ReturnType<typeof fsStats>>>("/si?fn=fsStats", req);
}
export function useDisksIO() {
  return useSWR<Awaited<ReturnType<typeof disksIO>>>("/si?fn=disksIO", req);
}
export function useDiskLayout() {
  return useSWR<Awaited<ReturnType<typeof diskLayout>>>(
    "/si?fn=diskLayout",
    req
  );
}
export function useNetworkInterfaceDefault() {
  return useSWR<Awaited<ReturnType<typeof networkInterfaceDefault>>>(
    "/si?fn=networkInterfaceDefault",
    req
  );
}
export function useNetworkGatewayDefault() {
  return useSWR<Awaited<ReturnType<typeof networkGatewayDefault>>>(
    "/si?fn=networkGatewayDefault",
    req
  );
}
export function useNetworkInterfaces() {
  return useSWR<Awaited<ReturnType<typeof networkInterfaces>>>(
    "/si?fn=networkInterfaces",
    req
  );
}
export function useNetworkStats() {
  return useSWR<Awaited<ReturnType<typeof networkStats>>>(
    "/si?fn=networkStats",
    req,
    { refreshInterval: 4000 }
  );
}
export function useNetworkConnections() {
  return useSWR<Awaited<ReturnType<typeof networkConnections>>>(
    "/si?fn=networkConnections",
    req
  );
}
export function useInetChecksite() {
  return useSWR<Awaited<ReturnType<typeof inetChecksite>>>(
    "/si?fn=inetChecksite",
    req
  );
}
export function useInetLatency() {
  return useSWR<Awaited<ReturnType<typeof inetLatency>>>(
    "/si?fn=inetLatency",
    req
  );
}
export function useWifiNetworks() {
  return useSWR<Awaited<ReturnType<typeof wifiNetworks>>>(
    "/si?fn=wifiNetworks",
    req
  );
}
export function useWifiInterfaces() {
  return useSWR<Awaited<ReturnType<typeof wifiInterfaces>>>(
    "/si?fn=wifiInterfaces",
    req
  );
}
export function useWifiConnections() {
  return useSWR<Awaited<ReturnType<typeof wifiConnections>>>(
    "/si?fn=wifiConnections",
    req
  );
}
export function useUsers() {
  return useSWR<Awaited<ReturnType<typeof users>>>("/si?fn=users", req);
}
export function useProcesses() {
  return useSWR<Awaited<ReturnType<typeof processes>>>("/si?fn=processes", req);
}
export function useProcessLoad() {
  return useSWR<Awaited<ReturnType<typeof processLoad>>>(
    "/si?fn=processLoad",
    req
  );
}
export function useServices() {
  return useSWR<Awaited<ReturnType<typeof services>>>("/si?fn=services", req);
}
export function useDockerInfo() {
  return useSWR<Awaited<ReturnType<typeof dockerInfo>>>(
    "/si?fn=dockerInfo",
    req
  );
}
export function useDockerImages() {
  return useSWR<Awaited<ReturnType<typeof dockerImages>>>(
    "/si?fn=dockerImages",
    req
  );
}
export function useDockerContainers() {
  return useSWR<Awaited<ReturnType<typeof dockerContainers>>>(
    "/si?fn=dockerContainers",
    req
  );
}
export function useDockerContainerStats() {
  return useSWR<Awaited<ReturnType<typeof dockerContainerStats>>>(
    "/si?fn=dockerContainerStats",
    req
  );
}
export function useDockerContainerProcesses() {
  return useSWR<Awaited<ReturnType<typeof dockerContainerProcesses>>>(
    "/si?fn=dockerContainerProcesses",
    req
  );
}
export function useDockerVolumes() {
  return useSWR<Awaited<ReturnType<typeof dockerVolumes>>>(
    "/si?fn=dockerVolumes",
    req
  );
}
export function useDockerAll() {
  return useSWR<Awaited<ReturnType<typeof dockerAll>>>("/si?fn=dockerAll", req);
}
export function useVboxInfo() {
  return useSWR<Awaited<ReturnType<typeof vboxInfo>>>("/si?fn=vboxInfo", req);
}
export function usePrinter() {
  return useSWR<Awaited<ReturnType<typeof printer>>>("/si?fn=printer", req);
}
export function useUsb() {
  return useSWR<Awaited<ReturnType<typeof usb>>>("/si?fn=usb", req);
}
export function useAudio() {
  return useSWR<Awaited<ReturnType<typeof audio>>>("/si?fn=audio", req);
}
export function useBluetoothDevices() {
  return useSWR<Awaited<ReturnType<typeof bluetoothDevices>>>(
    "/si?fn=bluetoothDevices",
    req
  );
}
export function useGetStaticData() {
  return useSWR<Awaited<ReturnType<typeof getStaticData>>>(
    "/si?fn=getStaticData",
    req
  );
}
export function useGetDynamicData() {
  return useSWR<Awaited<ReturnType<typeof getDynamicData>>>(
    "/si?fn=getDynamicData",
    req
  );
}
export function useGetAllData() {
  return useSWR<Awaited<ReturnType<typeof getAllData>>>(
    "/si?fn=getAllData",
    req
  );
}
export function useGet() {
  return useSWR<Awaited<ReturnType<typeof get>>>("/si?fn=get", req);
}
// export function useObserve() {return useSWR<Awaited<ReturnType<typeof observe  >>>('/si?fn=observe', req)}
// export function usePowerShellStart() {return useSWR<Awaited<ReturnType<typeof powerShellStart  >>>('/si?fn=powerShellStart', req)}
// export function usePowerShellRelease() {return useSWR<Awaited<ReturnType<typeof powerShellRelease  >>>('/si?fn=powerShellRelease', req)}
