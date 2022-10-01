import connectMongo from '../../utils/connectMongo';
import User from '../../models/userModel';
import bcrypt from 'bcrypt';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function login(req, res)
{
  try
  {
    if(req.method == "POST")
    {
        await connectMongo();
        const user = await User.findOne({email: req.body.email});

        if(user != null)
        {
            bcrypt.compare(req.body.password, user.password).then((auth) =>
            {
                if(auth)
                    res.json({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        is_admin: user.is_admin
                    });
                else
                    res.status(403).json({
                        message: "Mauvais mot de passe"
                    });
            });
        }
        else
            res.status(404).json({
                message: "Utilisateur introuvable"
            });
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
