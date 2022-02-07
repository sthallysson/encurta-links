import axios from "axios";

export const key = "a36b970c03acef7bed62ed59821b90730abbac31";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
