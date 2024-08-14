import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://cars-n-rides.netlify.app/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;

