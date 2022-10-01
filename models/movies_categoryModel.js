import { Schema, model, models } from 'mongoose';

const movie_categorySchema = new Schema({
  movie_id: {
    type: String,
    required: true
  },
  category_id: {
    type: String,
    required: true
  }
});

const MovieCategory = models.MovieCategory || model('MovieCategory', movie_categorySchema);

export default MovieCategory;
