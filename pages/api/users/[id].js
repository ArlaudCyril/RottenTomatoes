import connectMongo from '../../../utils/connectMongo';
import User from '../../../models/userModel';
import bcrypt from 'bcrypt';

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
        const user = await User.findById(id);
        console.log('READ DOCUMENT');

        res.json({ user });
    }

    else
    if(req.method == "POST")        //Update
    {
        let request = req.body;
      
        if(request.password != undefined)
        {
          request.password = bcrypt.hashSync(request.password, 10);
        }
      
        await User.findByIdAndUpdate(id, request);
      
        res.json(request);
    }

    else
    if(req.method == "DELETE")        //Delete
    {
        await User.findByIdAndDelete(id);
      
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
