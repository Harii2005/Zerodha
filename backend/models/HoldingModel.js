const {model} = require('mongoose');
const {HoldingsSchema} = require('./schema/HoldingsSchema');
const HoldingModel = new model('holding' , HoldingsSchema);
module.exports = {HoldingModel};