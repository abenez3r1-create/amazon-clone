import axios from "axios";
export const Instance = axios.create({
  baseURL: "https://amazon-backend-8vpd.onrender.com",
});
