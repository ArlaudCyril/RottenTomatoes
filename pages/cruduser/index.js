import Navbar from "../../components/navbar.jsx";
import Link from 'next/link';
export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/users/getAll');
    const data = await res.json();



    return {
        props: { user: data.user }
    }
}

// function to delete a user
export async function deleteUser(id) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })

    });
    const data = await res.json();
    return data;

}

// function to update an user by id 
export async function updateUser(id, name, email, password) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            name: name,
            email: email,
            password: password
        })

    });
    const data = await res.json();
    return data;
}




export default function CRUDUSER({ user }) {
    return (
        <div>
            <Navbar />
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>ID User</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>is_admin</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {user?.map(user => (
                            <tr key={user._id}>
                                <th>{user._id.substr(0, 10) + "..."}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.is_admin}</td>
                                <td>
                                <button onClick={() => { deleteUser(user._id) }} className="bg-red-500 text-white p-2 rounded shadow">Delete</button>
                                <Link href={`/cruduser/${user._id}`}>
                                        <button className="bg-blue-500 text-white p-2 rounded shadow">Update</button>
                                        </Link>
                                        </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}




{/* <div className="overflow-x-auto relative shadow-md sm:rounded-lg pb-5">
                <h1 className="text-center bg-black py-4 lg:px-12 shadow">MOVIE TABLE</h1>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-4 px-6">ID User</th>
                            <th scope="col" className="py-4 px-6">name</th>
                            <th scope="col" className="py-4 px-6">Email</th>
                            <th scope="col" className="py-4 px-6">Password</th>
                            <th scope="col" className="py-4 px-6">grade</th>
                            <th scope="col" className="py-4 px-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div>
                            {user?.map(user => (
                                <tr key={user._id} className="bg-white hover:bg-gray-300 border-b text-gray-700">
                                    <td className="py-4 px-6">{user._id.substr(0, 10) + "..."}</td>
                                    <td className="py-4 px-6">{user.name}</td>
                                    <td className="py-4 px-6">{user.email}</td>
                                    <td className="py-4 px-6">{user.password.substr(0, 10) + "..."}</td>
                                    <td className="py-4 px-6">{user.is_admin}</td>
                                    <td className="py-4 px-6">
                                       
                                        <button onClick={() => { deleteUser(user._id) }} className="bg-red-500 text-white p-2 rounded shadow">Delete</button>
                                        
                                        <Link href={`/cruduser/${user._id}`}>
                                        <button className="bg-blue-500 text-white p-2 rounded shadow">Update</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </div>
                    </tbody>
                </table>
            </div> */}