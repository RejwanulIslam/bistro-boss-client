import React from 'react'
import useAuth from '../hooks/useAuth'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'
import useAxiosSecure from '../hooks/useAxiosSecure'

export default function FoodCard({ item }) {
    const { _id, name, recipe, image, category, price } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const AxiosSecure = useAxiosSecure()

    const handleAddtoCard = (food) => {
        if (user && user?.email) {
            console.log(food, user?.email)
            const cartItem = {
                manuId: _id,
                email: user?.email,
                name,
                recipe,
                image,
                category,
                price
            }
            AxiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Plase login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=' absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddtoCard(item)} className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 block">Add to Card</button>
                </div>
            </div>
        </div>
    )
}
