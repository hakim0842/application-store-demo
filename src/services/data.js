import axios from "axios";
const URL =
  "https://raw.githubusercontent.com/onlineservice24/store/refs/heads/main/store.json";
export async function fetchData() {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
