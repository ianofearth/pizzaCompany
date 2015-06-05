function Pizza(customerName, pizzaSize, toppings) {
	this.customerName = customerName;
	this.pizzaSize = pizzaSize
	this.toppings = [];
}

Pizza.prototype.price = function() {
	// var toppingPrice = {};
	// toppings["pepperoni"] = 1;

	var sizePrice = {};
	sizePrice["small"] = 3;
	sizePrice["medium"] = 5;
	sizePrice["large"] = 7;

	var total = sizePrice[this.pizzaSize];
	return total;
}