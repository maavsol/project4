const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const restaurantSchema = new Schema({
  Name: String,
  Dishes: { type: Schema.Types.ObjectId, ref: 'Dish' },
  location: { type: { type: String }, coordinates: [Number]}
},
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

restaurantSchema.index({ location: '2dsphere' });

const Restaurant = mongoose.model("Restaurant", userSchema);
module.exports = Restaurant;
