const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  salePrice: { type: Number },
  stock: { type: Number, required: true },
  weight: { type: String },
  dimensions: { type: String },
  categories: [{ type: String }],
  tags: [{ type: String }],
  brand: { type: String },
  variations: [
    {
      name: { type: String },
      options: [{ type: String }],
    },
  ],
  images: [{ type: String }],
  videos: [{ type: String }],
  reviews: [
    {
      rating: { type: Number },
      comment: { type: String },
    },
  ],
  relatedProducts: [{ type: mongoose.Schema.Types.ObjectId }],
  shippingOptions: [
    {
      type: { type: String },
      cost: { type: Number },
      estimatedDelivery: { type: String },
    },
  ],
  discounts: [
    {
      type: { type: String },
      amount: { type: Number },
      code: { type: String },
    },
  ],
  availabilityInStores: { type: Boolean },
  warranty: { type: String },
  returnPolicy: { type: String },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;