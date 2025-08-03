import React from 'react'
import useAuth from '../../hooks/useAuth'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

export default function PaymentHistory() {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  const { data } = useQuery({
    queryKey: ['payment', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payment/${user?.email}`)
      return res.data

    }
  })
  console.log(data)
  return (
    <div>
      <h2 className='text-3xl'>Total Payment:{data?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Price</th>
              <th>Transation Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              data?.map((payment,index) => (<tr>
                <th>{index+1}</th>
                <td>{payment?.price}</td>
                <td>{payment?.transationId}</td>
                <td>{payment?.status}</td>
              </tr>))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
