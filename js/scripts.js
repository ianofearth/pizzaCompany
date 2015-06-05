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
		if (topping === "Pepperoni") {
			toppingTotal += 2;
		} else if (topping === "Sausage") {
			toppingTotal += 2;
		} else if (topping === "Bacon") {
			toppingTotal += 2;
		} else if (topping === "Extra-cheese") {
			toppingTotal += 2;
		} else if (topping === "Olive") {
			toppingTotal += 1;
		} else if (topping === "Mushroom") {
			toppingTotal += 1;
		} else if (topping === "Onion") {
			toppingTotal += 1;
		} else if (topping === "Pineaplle") {
			toppingTotal += 1;
		} else if (topping === "Garlic") {
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
		var quantity = $("input#quantity").val();

		$(".new-topping").each(function() {
			allToppings.push($(this).val());
		});

		var inputtedCustomerName = $("input#customer-name").val();
		var inputtedPizzaSize = $("select#size-select").val();
		var inputtedTopping = $("select#topping-select").val();

		var myPizza = new Pizza(inputtedCustomerName, inputtedPizzaSize, allToppings);

		$("h4.customer-name").append("<h4>Order for: " + myPizza.customerName + "</h4>");

		$("h5.pizza-size").append("<h5>Size: " + myPizza.pizzaSize + " with </h5>");

		myPizza.toppings.forEach(function(topping) {
			$("ul.toppings").append("<li>" + topping + "</li>");
		});
		// $("h5.display-toppings").append("<h5>Toppings on your Pizza: " + myPizza.toppings.forEach(function(topping) {
		// 	$("ul.toppings").append("<li>" + topping + "</li>");
		// }) + "</h5>");  //this returns "undefined" after the : in the title, don't know why come back to fix later

		var totalCost = myPizza.getPrice() * quantity;
		$("h2.total-cost").append("<h2>Your Total: $" + totalCost + ".00</h2>");
		
		$(".pizza-stats").show();
		$(".pizza-order").hide();

		// $("input#customer-name").val("");
		// $("input#quantity").val("");
		// $(".new-toppings").not(":first").remove();

	});
	// $("#try-again").click(function(event) {
	// 	event.preventDefault();
	// 	$(".pizza-order").show();
	// 	$(".pizza-stats").hide();

	// });
});


