describe("Pizza", function() {
	it("will return all of the pizza's properties", function() {
		var myPizza = new Pizza("ian", "large", []);
		expect(myPizza.customerName).to.eq("ian");
		expect(myPizza.pizzaSize).to.eq("large");
		expect(myPizza.toppings).to.eql([]);
	});

	// it("will allow the user to add a topping", function() {
	// 	var myPizza = new Pizza("ian", ["pepperoni"]);
	// 	expect(myPizza.customerName).to.eq("ian");
	// 	expect(myPizza.toppings).to.eql(["pepperoni"]);
	// });
});