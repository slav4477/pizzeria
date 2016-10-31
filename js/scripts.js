function Pizza(size, meatToppings, nonMeatToppings) {
  this.pizzaSize = size;
  this.meatTops = meatToppings.length;
  this.nonMeatTops = nonMeatToppings.length;
  this.pizzaPrice = 0;
  this.meatTopsPrice = 0;
  this.nonMeatTopsPrice = 0;
  this.totalPrice = 0;
}

Pizza.prototype.PriceofPizza = function() {
  if(this.pizzaSize === "pizza-sm") {
    return this.pizzaPrice += 10;
  } else if(this.pizzaSize === "pizza-md") {
    return this.pizzaPrice += 12;
  } else if(this.pizzaSize === "pizza-lg") {
    return this.pizzaPrice += 14;
  }
}

Pizza.prototype.PriceofMeatToppings = function() {
  return this.meatTopsPrice = this.meatTops * 2;
}

Pizza.prototype.PriceofNonMeatToppings = function() {
  return this.nonMeatTopsPrice = this.nonMeatTops * 1;
}

Pizza.prototype.Total = function() {
  return this.totalPrice = this.pizzaPrice + this.meatTopsPrice + this.nonMeatTopsPrice;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $('input:radio[name=pizza-size]:checked').val();
    var meatToppings = [];
    $("input:checkbox[name=meat-toppings]:checked").each(function() {
      meatToppings.push(this.value);
    });
    var nonMeatToppings = [];
    $("input:checkbox[name=non-meat-toppings]:checked").each(function() {
      nonMeatToppings.push(this.value);
    });

    var pizza = new Pizza(pizzaSize, meatToppings, nonMeatToppings);

    pizza.PriceofPizza();
    pizza.PriceofMeatToppings();
    pizza.PriceofNonMeatToppings();
    pizza.Total();

    $("#pizza-price").text(pizza.totalPrice);
    $("#complete-order").show();
  });
});
