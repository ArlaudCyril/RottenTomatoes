import React from "react";
import Navbar from "../../components/navbar.jsx";
import { useState } from "react";


function MovieId({ movie }) {
    const [comment, setComment] = useState("");
    const [grade, setGrade] = useState(0.0);



    return (
        <div>
            <Navbar />
            <div className="container max-w-4xl mx-auto pt-6">
                <h1 className="font-bold text-xl my-2">{movie.title}</h1>
                <div className="px-3">
                    <img src={movie.picture} width={1000} height={600} className="rounded-md" alt={movie.title} />
                    <p className="text-gray-600 text-sm">Note: <span className="font-bold">{movie.note.toString().substr(0, 3)}/5</span>
                        <div className="rating rating-xs">
                            
                            
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                           
                        </div>
                    </p>
                    <h1 className="font-bold text-xl my-2">{movie.title}</h1>
                    <p className="text-gray-600 text-sm mt-4">{movie.summary}</p>

                    {/* CATEGORIES */}

                    {movie.categories?.map(categorie => (
                            <div key={categorie._id} className="rating">
                                <div className="px-6 py-2">
                                    <p className="text-gray-700 text-base mb-1">{categorie}</p>

                                    
                                </div>
                            </div>
                        ))}

                    {/* COMMENTAIRES */}
                    <div className="mt-4">
                        <h1 className="font-bold text-xl my-2">Commentaires</h1>

                        {/* INPUT to add the addComment function a new comment  */}
                        <div className="flex">
                            <input value={comment} onChange={e => setComment(e.target.value)} name="content" type="text" className="w-full rounded border shadow p-2 mr-2 my-2" placeholder="Ajouter un commentaire" />
                            <button onClick={() => { addComment(movie, comment) }} className="bg-blue-500 text-white p-2 rounded shadow">Ajouter</button>
                        </div>

                        {/* GRADES */}
                        <div className="flex">
                            <input value={grade} onChange={e => setGrade(e.target.value)} name="note" type="text" className="w-[50px] rounded border shadow p-2 mr-2 my-2" placeholder="1 .. 5" />
                            <button onClick={() => { addGrade(movie, grade) }} className="bg-blue-500 text-white p-2 rounded shadow">Noter</button>
                        </div>



                        {movie.comments?.map(comment => (
                            <div key={comment._id} className="bg-white shadow-sm rounded-md cursor-pointer">
                                <div className="px-6 py-2">
                                    <p className="text-gray-700 text-base mb-1">{comment.author}</p>

                                    <p className="text-gray-700 text-base mb-1">{comment.content}</p>
                                    <p className="text-gray-700 text-base mb-1">{comment.movie_id}</p>
                                </div>
                            </div>
                        ))}
                    </div>



                    
                </div>
            </div>
        </div>
)}

export async function getStaticPaths() {
    const movies = await fetch('http://localhost:3000/api/movies/getAll').then(r => r.json())
    console.log(movies)
    return {
        paths: movies.movies2.map(movie => ({
            params: { id: movie.id },
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const movie = await fetch(`http://localhost:3000/api/movies/${params.id}`).then(r => r.json())

    return { props: { movie } }
}

export async function addComment(movie, comment) {

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    
    const res = await fetch(`http://localhost:3000/api/comments/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: user.id,//JSON.parse(localStorage.getItem("user"))._id,
            movie_id: movie.id,
            content: comment,
        })

    });
    const data = await res.json();
    
    return data;
}

export async function addGrade(movie, grade) {
    console.log(movie.id);
    const res = await fetch(`http://localhost:3000/api/grades/add/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: JSON.parse(localStorage.getItem("user"))._id,
            movie_id: movie.id,
            note: grade,
        })

    });
    const data = await res.json();
    return data;
}



export default MovieId


