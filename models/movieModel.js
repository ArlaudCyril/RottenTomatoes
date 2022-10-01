import { Schema, model, models } from 'mongoose';

const movieSchema = new Schema({
  title: String,
  picture: String,
  summary: String,
  grade_id: String
});

const Movie = models.Movie || model('Movie', movieSchema);

export default Movie;
