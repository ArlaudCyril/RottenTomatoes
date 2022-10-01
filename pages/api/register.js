import connectMongo from '../../utils/connectMongo';
import User from '../../models/userModel';
import bcrypt from 'bcrypt';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function register(req, res)
{
  try
  {
    if(req.method == "POST")
    {
        await connectMongo();
        const user = await User.findOne({email: req.body.email});

        if(user != null)
        {
            res.status(403).json({
                message: "Cet utilisateur existe déjà"
            });
        }
        else
        {
            await connectMongo();
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                is_admin: 0
            });

            res.json({
                id: user.id,
                name: user.name,
                email: user.email,
                is_admin: user.is_admin
            });
        }
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
