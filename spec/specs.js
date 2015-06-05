describe("Pizza", function() {
	it("will return all of the pizza's properties", function() {
		var myPizza = new Pizza("ian", "large", []);
		expect(myPizza.customerName).to.eq("ian");
		expect(myPizza.pizzaSize).to.eq("large");
		expect(myPizza.toppings).to.eql([]);
	});

	it("will return the price of a pizza of entered size", function() {
		var myPizza = new Pizza("ian", "large", []);
		expect(myPizza.getSizePrice()).to.eq(7);
	});

	it("will return the price of a pizza of entered size", function() {
		var myPizza = new Pizza("ian", "medium", []);
		expect(myPizza.getSizePrice()).to.eq(5);
	});


	it("will return the price of a single pizza ingredient", function() {
		var myPizza = new Pizza("ian", "large", ["pepperoni"]);
		expect(myPizza.getToppingPrice()).to.eq(2);
	});

	it("will return the price of two ingredients", function() {
		var myPizza = new Pizza("ian", "large", ["pepperoni","sausage"]);
		expect(myPizza.getToppingPrice()).to.eq(4);
	});

	it("will return the price of 4 ingredients", function() {
		var myPizza = new Pizza("ian", "large", ["pepperoni","sausage", "extra-cheese", "mushroom"]);
		expect(myPizza.getToppingPrice()).to.eq(7);
	});

	it("return the price for a pizza, toppings and size", function() {
		var myPizza = new Pizza("ian", "large", ["pepperoni","sausage", "extra-cheese", "mushroom"]);
		myPizza.getSizePrice
		myPizza.getToppingPrice
		expect(myPizza.getTotalPrice()).to.eq(14);
	});
});