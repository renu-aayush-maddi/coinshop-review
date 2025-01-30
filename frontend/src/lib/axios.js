import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"https://coin-shop-y1lg.vercel.app/api",
    withCredentials: true,
})

export default axiosInstance;