import express from 'express';

const router = express.Router();

// Serve the calendar page
router.get('/', (req, res) => {
  res.render('calendar'); // Assuming you have a calendar.pug file
});

export default () => router;
