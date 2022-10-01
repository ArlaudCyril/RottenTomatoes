import React from 'react'
import { useState } from 'react';
import Navbar from "../../components/navbar.jsx";
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/categories/getAll');
    const data = await res.json();

    data.categories.map((cat) => {
        cat.checked = false;
    });


    return {
        props: { categories: data.categories }
    }
}

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
}


const Addmovie = ({ categories }) => {
    const [title, setTitle] = useState("");
    const [picture, setPicture] = useState("");
    const [summary, setSummary] = useState("");
    const [category_ids, setCategory_ids] = useState([]);
    const [allCat, setAllCat] = useState(categories);
    const forceUpdate = useForceUpdate();

    const router = useRouter();


    //console.log(category_ids);

    async function addCategories(thisMovieId) {
        //console.log(allCat);
        allCat.map((cat) => {
            if(cat.checked)
            {
                const res = fetch(`http://localhost:3000/api/movies_categories/add/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        category_id: cat._id,
                        movie_id: thisMovieId
                    })
                });
                //const data = res.json();
            }
        });
        //return data;
    }


    async function addMovie(movie) {
        const res = await fetch(`http://localhost:3000/api/movies/add/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: movie.title,
                picture: movie.picture,
                summary: movie.summary


            })

        });
        const data = await res.json();
        const res2 = await fetch('http://localhost:3000/api/movies/getAll');
        //console.log(res2);
        const data2 = await res2.json();
        //console.log(data2.movies2);
        const arraySize = data2.movies2.length;
        const movie_id = data2.movies2[arraySize - 1].id;
        //console.log(movie_id);

        addCategories(movie_id);

        router.push('/crudmovies');

        return data;
    }

    function handleOnChange(index, id)
    {
        var array = allCat;
        array[index].checked = !array[index].checked;
        setAllCat(array);
        console.log(allCat);
        forceUpdate()
        /*else
        {
            category_ids.map((cat_id) => {
                if(cat_id === id)
                {
                    category_ids.splice(category_ids.indexOf(cat_id), 1);
                }
            })
        }*/
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
                <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-6 space-y-4 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-gray-900">Add a movie</h1>
                    <div className="flex flex-col items-center justify-center w-full space-y-4">
                        <div className="flex flex-col items-start w-full">
                            <label className="text-sm font-medium text-gray-900">Title</label>
                            <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="w-full px-4 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600" />
                        </div>
                        <div className="form-control">
                            <label onChange={(e) => { console.log(category_ids) }} className="label cursor-pointer">
                                {allCat?.map((category, index) => (
                                    <span key={category._id} className="label-text">{category.name}
                                        <input type="checkbox"
                                            id={`custom-checkbox-${index}`}
                                            name={category.name}
                                            value={category.name}
                                            checked={category.checked}
                                            onChange={() => handleOnChange(index, category.id)} className="checkbox" />
                                    </span>

                                ))}
                            </label>
                        </div>
                        {/* <select onChange={(e) => { setCategory_id(e.target.value) }} className="select select-bordered select-sm w-full max-w-xs">
                            <option disabled selected>Categories</option>
                            {categories?.map(category => (
                                <option key={category._id} value={category._id}>{category.name}</option>
                            ))}

                        </select> */}

                        <div className="flex flex-col items-start w-full">
                            <label className="text-sm font-medium text-gray-900">Picture</label>
                            <input value={picture} onChange={e => setPicture(e.target.value)} type="text" className="w-full px-4 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600" />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <label className="text-sm font-medium text-gray-900">Summary</label>
                            <textarea value={summary} onChange={e => setSummary(e.target.value)} className="w-full px-4 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600" />
                        </div>


                        <button onClick={() => { addMovie({ title: title, picture: picture, summary: summary }) }} className="w-full px-4 py-2 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-primary-600 rounded-md hover:bg-primary-500 focus:outline-none focus:bg-primary-500">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}








export default Addmovie