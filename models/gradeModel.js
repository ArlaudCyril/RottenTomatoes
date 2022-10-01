import { Schema, model, models } from 'mongoose';

const gradeSchema = new Schema({
  note: Number,
  user_id: String,
  movie_id: String
});

const Grade = models.Grade || model('Grade', gradeSchema);

export default Grade;
