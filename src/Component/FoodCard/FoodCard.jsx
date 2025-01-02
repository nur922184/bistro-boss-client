import React, { useContext } from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';


const FoodCard = ({ item }) => {
    const { image, price, name, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] =useCart();
    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} saved to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //refetch cart to update the cart items counts
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "YOU ARE NOT LOG IN?",
                text: "please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className='absolute right-0 mr-4 bg-slate-900 text-white px-2'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={ handleAddToCart}
                            className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-200 text-orange-400 mt-4">
                            Add to Card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;