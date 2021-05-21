const food = require('./food.json');
const register = require('./register.json');
const order = require('./order.json');
const card = require('./card.json');
const address = require('./address.json');




module.exports = () => ({
  food: food,
  register: register,
  order: order,
  card: card,
  address: address
});