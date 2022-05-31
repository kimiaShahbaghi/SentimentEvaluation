import axios from "axios";
import { result } from "./sentimentSlice";

export const fetchUsers = async () => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/albums");
  const randomResp = resp.data[Math.floor(Math.random() * resp.data.length)];

  return randomResp;
};

export const PostUserData = async () => {
  const response = await axios.post(
    "https://react-http-8ae62-default-rtdb.firebaseio.com/user.json",
    { result }
  );

  console.log("post response from api ", response.status);
  return response.status;
};
