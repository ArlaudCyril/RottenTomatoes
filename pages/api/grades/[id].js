import connectMongo from '../../../utils/connectMongo';
import Grade from '../../../models/gradeModel';

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
        const grade = await Grade.findById(id);
        console.log('READ DOCUMENT');

        res.json({ grade });
    }

    else
    if(req.method == "POST")        //Update
    {
        await Grade.findByIdAndUpdate(id, req.body);
      
        res.json(req.body);
    }

    else
    if(req.method == "DELETE")        //Delete
    {
        await Grade.findByIdAndDelete(id);
      
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
