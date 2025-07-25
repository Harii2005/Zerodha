const {model} = require('mongoose');
const {WatchlistSchema} = require('./schema/HoldingsSchema');
const WatchlistModel = new model('watchlist' , WatchlistSchema);
module.exports = {WatchlistModel};