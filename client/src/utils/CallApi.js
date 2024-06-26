import axios from "axios";
import { BASE_URL } from "./constants";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const callAPI = async (resource) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};



const instance = axios.create({
  baseURL: "http://localhost:5500",
  // baseURL: "https://amazon-backend-hv69.onrender.com",
  withCredentials: true,
});

export default instance;