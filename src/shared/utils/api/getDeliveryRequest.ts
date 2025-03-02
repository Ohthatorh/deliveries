import axios from "axios";
import { API_URL } from "../variables/api-url";

export const getDeliveryRequest = async (id: string) => {
  return await axios
    .get(`${API_URL}/api/deliveries/?id=${id}`)
    .then((res) => res.data);
};
