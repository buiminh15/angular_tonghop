const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
      minlength: [10, 'A tour name must have more or equal to 10 characters'],
      maxlength: [40, 'A tour name must have less or equal to 40 characters'],
      validate: [validator.isAlpha, 'Tour name must be contain a character']
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
      required: [true, 'A tour must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult'
      }
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be above 5.0']
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
    priceDiscount: {
      type: Number,
      validate: {
        validator :function (val) {
        return val < this.price
      },
      message: 'Discount price ({VALUE}) should be below regular price'
    }
    },
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
    ],
    secretTour: {
      type: Boolean,
      default: false
    }
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

// QUERY MIDDLEWARE 
tourSchema.pre(/^find/, function(next) {
  this.find({secretTour: {$ne: true}})
  next();
});

// tourSchema.post(/^find/, function(docs, next) {
//   console.log(docs)
//   next()
// });

// AGGREGATION MIDDLEWARE 
tourSchema.pre('aggregate', function(next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
  next();
});


const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
