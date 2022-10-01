import Grade from '../models/gradeModel';

export default async function calculNoteMovie(idMovie)
{
    const grades = await Grade.find();
    
    let note = 0.0;
    let index = 0;

    if(grades.length != 0)
    {
        grades.forEach((g) =>
        {
            if(g.movie_id == idMovie)
            {
                note += g.note;
                index ++;
            }
        })

        if(index != 0)
            note /= index;
    }

    return note;
}