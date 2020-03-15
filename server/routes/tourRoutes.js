const express = require('express');
const router = express.Router();
const {
  checkId,
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour
} = require('../controllers/tourController');

router.param('id', checkId);

router
  .route('/')
  .get(getAllTours)
  .post(createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
