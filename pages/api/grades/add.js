import connectMongo from '../../../utils/connectMongo';
import Grade from '../../../models/gradeModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addGrade(req, res)
{
  try
  {
    if(req.method == "POST")
    {
      console.log('CONNECTING TO MONGO');
      await connectMongo();
      console.log('CONNECTED TO MONGO');

      console.log('CREATING DOCUMENT');
      const grade = await Grade.create(req.body);
      console.log('CREATED DOCUMENT');

      res.json({ grade });
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
