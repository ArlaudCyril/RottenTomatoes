import connectMongo from '../../../utils/connectMongo';
import MovieCategory from '../../../models/movies_categoryModel';

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
        const movie_cat = await MovieCategory.findById(id);
        console.log('READ DOCUMENT');

        res.json({ movie_cat });
    }

    else
    if(req.method == "POST")        //Update
    {
        await MovieCategory.findByIdAndUpdate(id, req.body);
      
        res.json(req.body);
    }

    else
    if(req.method == "DELETE")        //Delete
    {
        await MovieCategory.findByIdAndDelete(id);
      
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
