import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

export default function useAdmin() {
    const { user, loding } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin, isPending, } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loding,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            // const res = await axiosSecure.get(`/user/admin/hany@gmail.com`)
            console.log(res?.data)
            return res?.data?.admin
        }
    })
    console.log(isAdmin)
    return [isAdmin, isPending]
}
