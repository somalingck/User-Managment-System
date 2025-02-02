const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recipients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  message: { type: String, required: true },
  status: { type: String, enum: ['queued', 'delivered', 'read'], default: 'queued' },
  timestamp: { type: Date, default: Date.now },
  type: { type: String, enum: ['critical', 'non-critical'], required: true }
});

module.exports = mongoose.model('Notification', notificationSchema);
