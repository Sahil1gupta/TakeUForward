const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  timer: {
    type: Number,
    required: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

bannerSchema.pre("save", function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Banner', bannerSchema);