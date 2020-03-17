const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'A tour must have a description'],
    trim: true
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a maxGroupSize'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 4.5
  },
  summary: {
    type: String,
    required: [true, 'A tour must have a summary'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  priceDiscount: Number,
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image']
  },
  images: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  startDates: [{
    type: Date
  }]
});
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
