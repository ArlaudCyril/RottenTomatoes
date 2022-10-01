//import Movie from '../models/movieModel';
import Category from '../models/categoryModel';
import MovieCategory from '../models/movies_categoryModel';

export default async function getCategoriesFromMovie(movieId)
{
    const relations = await MovieCategory.find();

    //console.log(movie);
    let categories = [];

    for(let i=0 ; i<relations.length ; i++)
    {
        if(relations[i].movie_id == movieId)
        {
            const category = await Category.findById(relations[i].category_id);
            //console.log(category);
            categories.push(category.name);
        }
    }

    //console.log(categories);

    return categories;
}