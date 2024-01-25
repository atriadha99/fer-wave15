import axios from "axios";
import CONST from "../utils/constants";

const axiosAdminInstance = axios.create({
  baseURL: CONST.ADMIN_BASE_URL,
  headers: {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwNjAxODU3MX0.YNRYwDzTRQF5yAR5ar99oZCWnU7FAVswiwNfLORVvzc",
  },
});

export default axiosAdminInstance;
