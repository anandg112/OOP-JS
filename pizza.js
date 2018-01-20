class Pizza {

      constructor(size, crust) {
        this.size = size;
        this.crust = crust;
	this.toppings = ["cheese"];
      }
      addTopping(topping) {
        this.toppings.push(topping);
      }
}

let pizza = new Pizza('large', 'thin');
console.log(pizza);

let pizza1 = new Pizza();
console.log(pizza1.toppings);
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings);

let pizza2 = new Pizza();
console.log(pizza2.toppings);
pizza2.addTopping("more cheese");
console.log(pizza2.toppings);
pizza2.addTopping("Pepperoni");
console.log(pizza2.toppings);
