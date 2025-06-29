import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { FaTrashAlt, FaUsers } from 'react-icons/fa'
import Swal from 'sweetalert2'

export default function Allusers() {
    const axiosSecure = useAxiosSecure()
    const { data, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',
                // {
                //     headers: {
                //         authorization: `Bearer ${localStorage.getItem('access-token')}`
                //     }
                // }
            )

            return res.data
        }
    })

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/user/admin/${user?._id}`)
            .then(res => {
                refetch()
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user?._id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"

                            });
                            refetch()
                        }
                    })


            }

        });
    }

    return (
        <div>
            <div className='flex justify-evenly'>
                <h1 className='text-3xl '>All Users</h1>
                <h1 className='text-3xl '>Total Users {data?.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((user, index) => <tr key={user?._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>
                                    {
                                        user?.role == 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-lg text-2xl text-yellow-500">
                                            <FaUsers></FaUsers>
                                        </button>
                                    }
                                </td>

                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg text-red-500">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
