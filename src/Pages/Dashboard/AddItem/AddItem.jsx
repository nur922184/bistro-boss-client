import { useForm } from "react-hook-form";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosSecurePublic from "../../../Hooks/useAxiosSecurePublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;


const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const  axiosPublic = useAxiosSecurePublic();
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = {image:data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers:{
                'content-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            //now send the menu item data to 
            const menuItem ={
                name: data.name,
                category: data.category, 
                price: parseFloat(data.price), 
                recipe: data.recipe, 
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data);
            if(menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }   
        }
        console.log('with image', res.data)
    };

    return (
        <div>
            <SectionTitle heading="add an item" subHeading=" What's new"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-4">
                        <div className="label">
                            <span className="label-text">Recipe Name *</span>
                        </div>
                        <input
                            {...register("name", {require: true})}
                            type="text"
                            placeholder="Recipe Name"
                            required
                            className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category Name *</span>
                            </div>
                            <select defaultValue="default" {...register("category")}
                                className=" input input-bordered select select-ghost w-full">
                                <option disabled value="default">select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price *</span>
                            </div>
                            <input
                                {...register("price", {require: true})}
                                type="text"
                                placeholder="Price"
                                required
                                className="input input-bordered w-full" />
                        </label>

                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea 
                           {...register("recipe", {require: true})}
                        className="textarea textarea-bordered h-24" 
                        placeholder="Recipe Details" required>
                        </textarea>

                    </label>
                    <div className="form-control w-full my-4">
                        <input    {...register("image", {require: true})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn bg-slate-400">
                        Add Items <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;