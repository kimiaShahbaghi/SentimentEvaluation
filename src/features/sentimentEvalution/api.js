import axios from "axios";
import request from "../../helper/requestConfig";

export const fetchUsers = async () => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/albums");
  const randomResp = resp.data[Math.floor(Math.random() * resp.data.length)];
  const outPut = { random: randomResp, status: resp.status };
  //console.log("get response", outPut);
  return outPut;
};

export const PostUserData = async (data, userId) => {
  return await request.post("/user.json", { ...data, userId });
};
