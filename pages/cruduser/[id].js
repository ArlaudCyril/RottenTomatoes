import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'

// THIS PAGE IS THE UPDATE PAGE OF THE USER



export async function getStaticPaths() {
    const users = await fetch('http://localhost:3000/api/users/getAll').then(r => r.json())
    console.log(users)
    return {
        paths: users.user.map(user => ({
            params: { id: user._id.toString() },
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const user = await fetch(`http://localhost:3000/api/users/${params.id}`).then(r => r.json())

    return { props: { user } }
}






export default function UpdateUser({ user }) {
    const [name, setName] = useState(user.user.name);
    const [email, setEmail] = useState(user.user.email);
    const [is_admin, setIs_admin] = useState(user.user.is_admin);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/api/users/${user.user._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                name,
                email,
                is_admin,
            })
        });
        const data = await res.json();
        router.push('/cruduser');
    }
    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Is Admin</label>
                    <input type="text" value={is_admin} onChange={(e) => setIs_admin(e.target.value)} />
                </div>
                <button className="btn">Update User</button>
            </form>
        </div>
    )
}






















