import Navbar from "../../components/navbar.jsx";
import Link from 'next/link'
import Image from 'next/image'

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/movies/getAll');
    const data = await res.json();

    return {
        props: { movies: data.movies2 }
    }
}
const MovieList = ({ movies }) => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {movies?.map(movie => (
                        <div key={movie._id} className="bg-white shadow-sm rounded-md cursor-pointer">
                            <img src={movie.picture} width={700} height={800} className="rounded-t-md" alt="movies" />
                            <div className="px-6 py-2">
                                <Link href={`/movies/${movie.id}`}>
                                    <a>
                                        <h2 className="font-bold text-xl mb-1">{movie.title}</h2>
                                    </a>
                                </Link>
                                <p className="text-gray-700 text-base mb-1">{movie.note}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieList









