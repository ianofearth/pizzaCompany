function Pizza(customerName, pizzaSize, toppings) {
	this.customerName = customerName;
	this.pizzaSize = pizzaSize
	this.toppings = toppings;
	this.sizePrice = {};
	this.sizePrice["small"] = 3;
	this.sizePrice["medium"] = 5;
	this.sizePrice["large"] = 7;
}

// function Toppings(toppings) {
// 	this.toppings = toppings
// }

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

$(document).ready(function() {
	$("#add-topping").click(function(event) {
		event.preventDefault();
		$(".new-topping-container").last().clone().appendTo("#new-toppings");
	});

	$("form#new-pizza").submit(function(event) {
		event.preventDefault();
		
		var allToppings = []
		$(".new-topping").each(function() {
			allToppings.push($(this).val());
		});

		var inputtedCustomerName = $("input#customer-name").val();
		var inputtedPizzaSize = $("select#size-select").val();
		var inputtedTopping = $("select#topping-select").val();

		var myPizza = new Pizza(inputtedCustomerName, inputtedPizzaSize, allToppings);

		$("h4.customer-name").append("<h4>Order for: " + myPizza.customerName + "</h4>");

		$("h5.pizza-size").append("<h5>Size: " + myPizza.pizzaSize + "</h5>");

		myPizza.toppings.forEach(function(topping) {
			$("ul.toppings").append("<li>" + topping + "</li>");
		});

		$("h2.total-cost").append("<h2>Your Total: $" + myPizza.getPrice() + ".00</h2>");


	});
});



//jquery create toppings array, push topping from form into array.


