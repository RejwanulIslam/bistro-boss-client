import { useQuery } from "@tanstack/react-query";
import useAxiosPublick from "./useAxiosPublick";

const useManu = () => {


    const axiosPublick = useAxiosPublick()

    const { data: manu = [], isPending: loding,refetch } = useQuery({
        queryKey: 'manu',
        queryFn: async () => {
            const res = await axiosPublick.get('/menu')
            return res.data
        }
    })
    return [manu, loding,refetch]
}

export default useManu;