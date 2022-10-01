import { Schema, model, models } from 'mongoose';

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user_id: String,
  movie_id: String
});

const Comment = models.Comment || model('Comment', commentSchema);

export default Comment;
