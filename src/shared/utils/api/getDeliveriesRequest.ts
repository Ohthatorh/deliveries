import axios from "axios";
import { API_URL } from "../variables/api-url";

export const getDeliveriesRequest = async (page: string, status?: string) => {
  if (status) {
    return await axios
      .get(`${API_URL}/api/deliveries/?status=${status}&page=${page || 1}`)
      .then((res) => res.data.deliveries);
  }
  return await axios
    .get(`${API_URL}/api/deliveries/?page=${page || 1}`)
    .then((res) => res.data.deliveries);
};
