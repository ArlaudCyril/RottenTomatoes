import connectMongo from '../../../utils/connectMongo';
import Category from '../../../models/categoryModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addMovie(req, res)
{
  try
  {
    if(req.method == "POST")
    {
      console.log('CONNECTING TO MONGO');
      await connectMongo();
      console.log('CONNECTED TO MONGO');

      console.log('CREATING DOCUMENT');
      const category = await Category.create(req.body);
      console.log('CREATED DOCUMENT');

      res.json({ category });
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
