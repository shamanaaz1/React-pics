import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 53b802d8022fee35d84bb54109be1a5834f98c05a688b34d1171769fd73b33ff"
  }
});
