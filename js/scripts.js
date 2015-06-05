function Pizza(customerName, pizzaSize, toppings) {
	this.customerName = customerName;
	this.pizzaSize = pizzaSize
	this.toppings = toppings;
	this.sizePrice = {};
	this.sizePrice["small"] = 3;
	this.sizePrice["medium"] = 5;
	this.sizePrice["large"] = 7;

}

Pizza.prototype.getPrice = function() {
	var sizeTotal = this.sizePrice[this.pizzaSize];
	
	var toppingTotal = 0;
	this.toppings.forEach(function(topping) {
		if (topping === "pepperoni") {
			toppingTotal += 2;
		} else if (topping === "sausage") {
			toppingTotal += 2;
		} else if (topping === "bacon") {
			toppingTotal += 2;
		} else if (topping === "extra-cheese") {
			toppingTotal += 2;
		} else if (topping === "olive") {
			toppingTotal += 1;
		} else if (topping === "mushroom") {
			toppingTotal += 1;
		} else if (topping === "onion") {
			toppingTotal += 1;
		} else if (topping === "pineaplle") {
			toppingTotal += 1;
		} else if (topping === "garlic") {
			toppingTotal += 1;
		}
	});
	var totalPrice = sizeTotal + toppingTotal;
	return totalPrice
}


Pizza.prototype.getSizePrice = function() {
	
	var sizeTotal = this.sizePrice[this.pizzaSize];
	return sizeTotal;
}

// Pizza.prototype.getToppingPrice = function() {
// 	var toppingTotal = 0;
// 	this.toppings.forEach(function(topping) {
// 		if (topping === "pepperoni") {
// 			toppingTotal += 2;
// 		} else if (topping === "sausage") {
// 			toppingTotal += 2;
// 		} else if (topping === "bacon") {
// 			toppingTotal += 2;
// 		} else if (topping === "extra-cheese") {
// 			toppingTotal += 2;
// 		} else if (topping === "olive") {
// 			toppingTotal += 1;
// 		} else if (topping === "mushroom") {
// 			toppingTotal += 1;
// 		} else if (topping === "onion") {
// 			toppingTotal += 1;
// 		} else if (topping === "pineaplle") {
// 			toppingTotal += 1;
// 		} else if (topping === "garlic") {
// 			toppingTotal += 1;
// 		}
// 	});
// 	return toppingTotal;
// }

// Pizza.prototype.getTotalPrice = function() {
// 	var totalPrice = this.sizeTotal + this.toppingTotal;
// 	return totalPrice
// }

//jquery create toppings array, push topping from form into array.


