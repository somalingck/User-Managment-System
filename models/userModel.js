const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobileNumber: { type: String },
  bio: { type: String },
  availability: { type: [String], default: [] },
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }],
});

module.exports = mongoose.model('User', userSchema);
