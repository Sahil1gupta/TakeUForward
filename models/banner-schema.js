const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  timer: {
    type: Number,
    required: true,
    min: 0,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
  createAt: {
    type: Date.now(),
    required: true,
  },
  updateAt: {
    type: Date.now(),
    required: true,
  },
});

bannerSchema.pre("save",function(next){
    this.updateAt=Date.now();
    return next();
})


const Banner=mongoose.model("Banner", bannerSchema);
module.exports=Banner;