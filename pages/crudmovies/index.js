import Navbar from "../../components/navbar.jsx";
import { useState } from "react";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/movies/getAll');
    const data = await res.json();
    return {
        props: { movies: data.movies2 }
    }
}


export async function deleteMovie(id) {
    const res = await fetch(`http://localhost:3000/api/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
      });
    const data = await res.json();
    return data;
    }




// function to add a movie
export async function addMovie(movie) {
    const res = await fetch(`http://localhost:3000/api/movies/add/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: movie.title,
            description: movie.summary,
            picture: movie.picture,
            summary: movie.summary




        })

    });
    const data = await res.json();
    return data;
}



export default function CRUDMOVIE({ movies }) {
    return (
        <div>
            <Navbar />
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        
        <th>Titles</th>
        <th>Grades</th>
        <th>Summaries</th>
        <th>Actions</th>
        <Link href="/crudmovies/addmovie">
                    <button className="btn btn-accent" >Add Movie</button>
                </Link>
      </tr>
    </thead>
    <tbody>
    {movies?.map(movie => (
      <tr key={movie._id}>
        <th>{movie.title}</th>
        <td>{movie.note}</td>
        <td>{movie.summary.substr(0, 70) + "..."}</td>
        <button onClick={() => { deleteMovie(movie.id) }} className="bg-red-500 text-white p-2 rounded shadow">Delete</button>
      </tr>
      ))}
      </tbody>
      </table>
      </div>
            
        </div>
    )
}


{/* <div className="overflow-x-auto relative shadow-md sm:rounded-lg pb-5">
                
                <Link href="/crudmovies/addmovie">
                    <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50" >Add Movie</button>
                </Link>
                <h1 className="text-center bg-black py-4 lg:px-12 shadow">MOVIE TABLE</h1>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-4 px-6">Name</th>
                            <th scope="col" className="py-4 px-6">Categorie</th>
                            <th scope="col" className="py-4 px-6">Note</th>
                            <th scope="col" className="py-4 px-6">Description</th>
                            <th scope="col" className="py-4 px-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div>
                            {movies?.map(movie => (
                                <tr key={movie._id} className="bg-white border-b text-gray-700">
                                    <td className="py-4 px-6">{movie.title}</td>
                                    <td className="py-4 px-6">{movie.categorie}</td>
                                    <td className="py-4 px-6">{movie.note}</td>
                                    <td className="py-4 px-6">{movie.summary.substr(0, 70) + "..."}</td>
                                    <td className="py-4 px-6">
                                         
                                         <button onClick={() => { deleteMovie(movie.id) }} className="bg-red-500 text-white p-2 rounded shadow">Delete</button> 
                                    </td>
                                </tr>
                            ))}
                        </div>
                    </tbody>
                </table>
            </div> */}