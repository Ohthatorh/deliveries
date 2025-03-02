import axios from "axios";

export const getDeliveryRequest = async (id: string) => {
  return await axios
    .get(`http://localhost:3000/api/deliveries/?id=${id}`)
    .then((res) => res.data);
};
