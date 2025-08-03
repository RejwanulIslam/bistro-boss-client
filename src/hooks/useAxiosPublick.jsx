import axios from "axios"

const axiosPublick = axios.create({
  baseURL: 'https://bistro-boss-server-tau-puce.vercel.app'
})
export default function useAxiosPublick() {
  return axiosPublick;
}

