import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDeleteLeft, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsrs = () => {
    const axiosSecure = useAxiosSecure();

    // একক কোয়েরি চালানোর জন্য `useQuery` ব্যবহার
    const { data: users = [], refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount >0 ){
                refetch();
                Swal.fire({
                    title: `${user.name} is an admin now`,
                    icon: "success",
                    draggable: true
                  });
            }
        })
    }

    const hanldeDeleteUser = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All User</h2>
                <h2 className="text-3xl">total users:  {users.length} </h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
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
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                   { user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn bg-orange-500 text-white btn-sm"><FaUsers></FaUsers></button>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => hanldeDeleteUser(user)}
                                        className="btn btn-ghost btn-sm"><FaDeleteLeft></FaDeleteLeft></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsrs;
