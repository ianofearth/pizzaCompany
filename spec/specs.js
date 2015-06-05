describe("Pizza", function() {
	it("will return all of the pizza's properties", function() {
		var myPizza = new Pizza("ian", "large", []);
		expect(myPizza.customerName).to.eq("ian");
		expect(myPizza.pizzaSize).to.eq("large");
		expect(myPizza.toppings).to.eql([]);
	});

	it("will return the price of a pizza of entered size", function() {
		var myPizza = new Pizza("ian", "large", []);
		expect(myPizza.price()).to.eq(7);
	});
});