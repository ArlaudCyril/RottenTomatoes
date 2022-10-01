import connectMongo from '../../../utils/connectMongo';
import Category from '../../../models/categoryModel';

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
        const categories = await Category.find();
        console.log('READ DOCUMENT');

        res.json({ categories });
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
