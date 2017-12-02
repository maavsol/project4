const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const orderSchema = new Schema({
  User: { type: Schema.Types.ObjectId, ref: 'User' },
  Restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
  Dishes: { type: Schema.Types.ObjectId, ref: 'Dish' }
},
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});


const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
