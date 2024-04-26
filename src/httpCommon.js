import Axios from "axios";

const axiosBaseURL = Axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosBaseURL;
