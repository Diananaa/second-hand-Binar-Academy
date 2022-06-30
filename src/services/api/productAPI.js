import axios from "axios";

const token = localStorage.getItem("user:token");
let config = { headers: { Authorization: "Bearer " + token } };

export default {
  getAll: () =>
    axios.get(
      "https://second-hand-kelompok-5.herokuapp.com/api/product",
      config
    ),
    getDetailProduct: () =>
    axios.get(
      "https://second-hand-kelompok-5.herokuapp.com/api/product/id/1",
      config
    ),
  add: (postData) =>
    axios.post(
      "https://second-hand-kelompok-5.herokuapp.com/api/product",
      postData, config
    ),
};
