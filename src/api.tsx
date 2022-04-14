import axios from "axios";


export const apiAuth = axios.create({
  baseURL: "https://api.linkedin.com/v2/me",
});
