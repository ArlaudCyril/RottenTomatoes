import connectMongo from '../../../utils/connectMongo';
import Grade from '../../../models/gradeModel';
//import User from '../../../models/movieModel';

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
        const grades = await Grade.find();
        console.log('READ DOCUMENT');

        res.json({ grades });
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
