const express = require('express');
const User = require('../models/userModel');
const Notification = require('../models/notificationModel');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Update profile
router.put('/update-profile', authMiddleware, async (req, res) => {
  const { name, mobileNumber, bio, availability } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, mobileNumber, bio, availability },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Send notification
router.post('/send-notification', authMiddleware, async (req, res) => {
  const { recipients, message } = req.body;
  const sender = req.user.id;

  try {
    const notification = new Notification({
      sender,
      recipients,
      message,
      type: 'non-critical',
    });

    await notification.save();
    res.json({ msg: 'Notification sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
