import connectMongo from '../../../utils/connectMongo';
import Movie from '../../../models/movieModel';
import calculNoteMovie from '../../../utils/calculNoteMovie';
import getMovieComments from '../../../utils/getMovieComments';
import getCategoriesFromMovie from '../../../utils/getCategoriesFromMovie';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getAllTest(req, res)
{
  try
  {
    if(req.method == "GET")
    {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('READING DOCUMENT');
        const movies = await Movie.find();
        console.log('READ DOCUMENT');

        //console.log(movies);

        let movies2 = [];

        /*movies.map(m => {

          movies2.push({
            title: m.title,
            picture: m.picture,
            summary: m.summary,
            note: 5.0
          });
        });*/

        for(let i=0 ; i<movies.length ; i++)
        {
          const movieNote = await calculNoteMovie(movies[i]._id);
          const movieComments = await getMovieComments(movies[i]._id);
          const movieCategories = await getCategoriesFromMovie(movies[i]._id);
          //console.log(note);

          movies2.push({
            id: movies[i]._id,
            title: movies[i].title,
            picture: movies[i].picture,
            summary: movies[i].summary,
            note: movieNote,
            comments: movieComments,
            categories: movieCategories
          });
        }

        res.json({ movies2 });
    }
    else
    {
        res.status(404).json({
            message: "Bad method!"
        });
    }
  }
  catch (error)
  {
    console.log(error);
    res.json({ error });
  }
}
