import { fetchData } from "./data";
export async function homeLoader() {
  const data = await fetchData();
  return data;
}
