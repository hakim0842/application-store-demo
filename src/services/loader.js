import { fetchData } from "./http";
export async function homeLoader() {
  const data = await fetchData();
  return data;
}
