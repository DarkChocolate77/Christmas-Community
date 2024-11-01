import verifyAuth from '../../middlewares/verifyAuth.js';
import express from 'express';

export default function () {
  const router = express.Router();

  // Use verifyAuth to protect the calendar route
  router.get('/', verifyAuth(), (req, res) => {
    res.render('calendar', { title: 'Calendar' }); // Adjust title as needed
  });

  return router;
}
