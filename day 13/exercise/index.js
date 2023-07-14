const FoodOrders = require('./class');

const order = new FoodOrders();
order.addFood('bihun');
order.addFood('ayam goreng');
order.addFood('kfc');
order.addFood('cakwe');
order.process();
