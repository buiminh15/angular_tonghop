const mongoose = require('mongoose');
const slugify = require('slugify');
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'A tour must have a description'],
      trim: true
    },
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a maxGroupSize']
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty']
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
    images: [
      {
        type: String
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now()
    },
    startDates: [
      {
        type: Date
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

tourSchema.virtual('durationWeeks').get(function() {
  return this.duration / 7
})

// DOCUMENT MIDDLEWARE: runs before save() and create() 
tourSchema.pre('save', function() {
  this.slug = slugify(this.name, { lower: true})
  next()
})

// tourSchema.pre('save', function(next) {
//  console.log('will save doc....')
//   next();
// });

// tourSchema.post('save', function(doc, next) {
//   console.log(doc)
//   next();
// });

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
