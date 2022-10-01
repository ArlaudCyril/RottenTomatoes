import User from '../models/userModel';
import Comment from '../models/commentModel';

export default async function getMovieComments(movieId)
{
    const comments = await Comment.find();
    
    let commentsToDisplay = [];
    
    for(let i=0 ; i<comments.length ; i++)
    {
        if(comments[i].movie_id == movieId)
        {
            const author = await User.findById(comments[i].user_id);
            
            if(author != null)
            {
                commentsToDisplay.push({
                    content: comments[i].content,
                    author: author.name
                });
            }
        }
    }

    return commentsToDisplay;
}