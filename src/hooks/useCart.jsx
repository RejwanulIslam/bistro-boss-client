import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react"
import { authContex } from "../contex/authprovider/Authprovider"

export default function useCart() {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(authContex)
    const { data, refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    return [data, refetch]
}

