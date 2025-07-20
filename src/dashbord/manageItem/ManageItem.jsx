import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../compoment/SectionTitle";
import useManu from "../../hooks/useManu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

export default function ManageItem() {
    const [manu, loding, refetch] = useManu()
    const axiosSecure = useAxiosSecure()
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                if (res.data.deletedCount) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            }
        });

    }

    const handleEditItem = (item) => {

    }
    return (
        <div>
            <SectionTitle title='Manage All Item' subtitle='---Hurry up---'></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                manu.map((item, ibdex) => (<tr>
                                    <td>
                                        {ibdex + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>
                                        {item?.price}
                                    </td>
                                    <th>
                                        <Link to={`/dashbord/update/${item?._id}`}>
                                            <button onClick={() => handleEditItem(item)} className="btn btn-ghost btn-lg text-2xl text-yellow-500">
                                                <FaEdit></FaEdit>
                                            </button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg text-red-500">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>))
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}
