import connectMongo from '../../../utils/connectMongo';
import User from '../../../models/userModel';
import bcrypt from 'bcrypt';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res)
{
  try
  {
    if(req.method == "POST")
    {
      console.log('CONNECTING TO MONGO');
      await connectMongo();
      console.log('CONNECTED TO MONGO');

      console.log('CREATING DOCUMENT');
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        is_admin: 0
      });
      console.log('CREATED DOCUMENT');

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
