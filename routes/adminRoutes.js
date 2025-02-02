const express = require('express');
const Notification = require('../models/notificationModel');
const User = require('../models/userModel');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Admin can send notifications
router.post('/send-notification', authMiddleware, async (req, res) => {
  const { recipients, message, type } = req.body;
  try {
    if (req.user.email !== 'admin@domain.com') return res.status(403).json({ msg: 'Unauthorized' });

    const notification = new Notification({
      sender: 'admin',
      recipients,
      message,
      type,
    });

    await notification.save();
    res.json({ msg: 'Notification sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
