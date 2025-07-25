const {model} = require('mongoose');
const {PositionsSchema} = require('./schema/HoldingsSchema');
const PositionsModel = new model('positions' , PositionsSchema);
module.exports = {PositionsModel};