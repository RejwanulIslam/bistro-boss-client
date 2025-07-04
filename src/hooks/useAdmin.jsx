import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

export default function useAdmin() {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin,isPending } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            console.log(res?.data)
            return res?.data?.admin
        }
    })
    console.log(isAdmin)
    return [isAdmin,isPending]
}
