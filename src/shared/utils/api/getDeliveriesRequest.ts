import axios from "axios";

export const getDeliveriesRequest = async (page: string, status?: string) => {
  if (status) {
    return await axios
      .get(
        `http://localhost:3000/api/deliveries/?status=${status}&page=${
          page || 1
        }`
      )
      .then((res) => res.data.deliveries);
  }
  return await axios
    .get(`http://localhost:3000/api/deliveries/?page=${page || 1}`)
    .then((res) => res.data.deliveries);
};
