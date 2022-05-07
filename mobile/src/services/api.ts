import axios from "axios";

export const api = axios.create({
  baseURL: "https://feedwidget-production-b4dc.up.railway.app",
});
