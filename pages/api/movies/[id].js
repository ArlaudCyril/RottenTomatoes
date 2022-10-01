import connectMongo from '../../../utils/connectMongo';
import Movie from '../../../models/movieModel';
import calculNoteMovie from '../../../utils/calculNoteMovie';
import getMovieComments from '../../../utils/getMovieComments';
import getCategoriesFromMovie from '../../../utils/getCategoriesFromMovie';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getById(req, res)
{
  try
  {
    const { id } = req.query;
    
    if(req.method == "GET")       //Select
    {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('READING DOCUMENT');
        const movie = await Movie.findById(id);
        console.log('READ DOCUMENT');

        const movieNote = await calculNoteMovie(id);

        const commentsToDisplay = await getMovieComments(id);

        const movieCategories = await getCategoriesFromMovie(id);

        res.json({
          id: movie.id,
          title: movie.title,
          picture: movie.picture,
          summary: movie.summary,
          note: movieNote,
          comments: commentsToDisplay,
          categories: movieCategories
        });
    }

    else
    if(req.method == "POST")        //Update
    {
        await Movie.findByIdAndUpdate(id, req.body);
      
        res.json(req.body);
    }

    else
    if(req.method == "DELETE")        //Delete
    {
        await Movie.findByIdAndDelete(id);
      
        res.json({
          message: "Deleted"
        });
    }
  }
  catch (error)
  {
    console.log(error);
    res.status(500).json({ error });
  }
}
