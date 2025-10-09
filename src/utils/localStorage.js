export function getInstalledApps() {
  const allInstalledApps = JSON.parse(localStorage.getItem("apps")) || [];
  return allInstalledApps;
}
export function installApp(id) {
  const allInstalledApps = JSON.parse(localStorage.getItem("apps")) || [];
  if (!allInstalledApps.includes(id)) {
    const afterInstallNewApp = [...allInstalledApps, id];
    localStorage.setItem("apps", JSON.stringify(afterInstallNewApp));
  } else {
    return true;
  }
}

export function uninstallApp(id) {
  const allInstalledApps = JSON.parse(localStorage.getItem("apps")) || [];
  const afterUninstalledApp = allInstalledApps.filter((item) => item !== id);
  localStorage.setItem("apps", JSON.stringify(afterUninstalledApp));
}
