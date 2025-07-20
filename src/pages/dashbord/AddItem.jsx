import { useForm } from "react-hook-form";
import SectionTitle from "../../compoment/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublick from "../../hooks/useAxiosPublick";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
export default function AddItem() {
    const axiosPublick = useAxiosPublick()
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
        console.log(data)
        const imgFile = { image: data.image[0] }
        
            const res = await axiosPublick.post(image_hosting_api, imgFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
        
      

        console.log(res.data)
        
        if (res.data.success) {
            const menuItem = {

                category: data.category,
                name: data.name,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const manuRes =await axiosSecure.post('/menu',menuItem)
            console.log(manuRes.data)
        }
        
 }catch(error){
        console.log(error)
       }
    }

    return (
        <div>
            <SectionTitle subtitle="---What's new?---" title="ADD AN ITEM"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}

                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name"
                            {...register("name", { required: true })} className="input input-bordered w-full " />

                    </div>

                    <div className="flex gap-4">
                        {/* category */}

                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">Select Category</span>
                            </label>
                            <select {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled selected>Select Category</option>
                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizza</option>
                                <option value='soup'>Soup</option>
                                <option value='dessert'>Dessert</option>
                                <option value='drinks'>Drinks</option>
                            </select>

                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" placeholder="Price"
                                {...register("price", { required: true })} className="input input-bordered w-full " />

                        </div>
                    </div>

                    {/* racipe detels */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Racipe Detels</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24"  {...register("recipe", { required: true })} placeholder="Bio"></textarea>

                    </div>

                    <div className="form-control w-full my-6 ">
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-sm w-full max-w-xs" />

                    </div>

                    <button className="btn">Add Item <FaUtensils className="ml-4"></FaUtensils></button>
                </form>
            </div>
        </div>
    )
}
