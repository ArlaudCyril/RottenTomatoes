import connectMongo from '../../../utils/connectMongo';
import User from '../../../models/userModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getByEmail(req, res)
{
  try
  {
    if(req.method == "POST")
    {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('READING DOCUMENT');
        const user = await User.find({email: req.body.email});
        console.log('READ DOCUMENT');

        res.json({ user });
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
