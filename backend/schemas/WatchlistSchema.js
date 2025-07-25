const { Schema } = require("mongoose");

const WatchlistSchema = new Schema({
  name: String, // Stock symbol/name
  price: Number, // Current price
  percent: String, // Percentage change
  isDown: Boolean, // True if price is down, false if up
});

module.exports = { WatchlistSchema };
