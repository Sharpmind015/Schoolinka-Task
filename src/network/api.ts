import axios from "axios";

const instance = axios.create({
  baseURL: " https://my-json-server.typicode.com/Sharpmind015/Schoolinka-Task",
});

export default instance;
