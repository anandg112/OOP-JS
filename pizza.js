class Pizza {

      constructor(size, crust) {
        this.size = size;
        this.crust = crust;
	this.toppings = ["cheese"];
      }
      addTopping(topping) {
        this.toppings.push(topping);
      }

      set size(size) {
        if(size === 's' || size === 'm' || size === 'l') {
           this.size = 5;
       }
      }

      get size() {
        return this.size;
      }
    
      get price() {
        const basePrice = 10;
        const toppingPrice = 2;
        return basePrice + this.toppings.length * toppingPrice;
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

const pizza3 = new Pizza();
pizza.price;
pizza.size = 's'; //s
