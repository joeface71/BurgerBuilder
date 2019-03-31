import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-6f4bd.firebaseio.com/"
});

export default instance;
