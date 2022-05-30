import axios from "axios";
// import { result } from "./sentimentSlice";

export const fetchUsers = async () => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/albums");
  const randomResp = resp.data[Math.floor(Math.random() * resp.data.length)];
  return randomResp;
};

// export const postUsers = async () => {
//   const response = await axios.post("https://github.com/", result);
//   console.log("post response ", response);
//   return response;
// };
