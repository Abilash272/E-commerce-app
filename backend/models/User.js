const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.virtual('cartItems', {
  ref: 'CartItem',
  localField: '_id',
  foreignField: 'user',
});

userSchema.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'user',
});

const User = mongoose.model('User', userSchema);

module.exports = User;
