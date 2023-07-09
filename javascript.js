// Define an empty cart array
let cart = [];

// Get all add-to-cart buttons
let addToCartButtons = document.querySelectorAll(".add-to-cart");

// Loop through all add-to-cart buttons
addToCartButtons.forEach(function(button) {

  // Add click event listener to each button
  button.addEventListener("click", function() {

    // Get the item ID from the button data attribute
    let itemId = button.getAttribute("data-id");

    // Check if item is already in the cart
    let itemInCart = cart.find(function(item) {
      return item.id === itemId;
    });

    // If item is not in the cart, add it
    if (!itemInCart) {
      cart.push({id: itemId, quantity: 1});
    } 
    // If item is already in the cart, increase quantity
    else {
      itemInCart.quantity++;
    }

    // Update the cart count
    let cartCount = document.querySelector(".cart-icon .count");
    cartCount.innerHTML = cart.length;

  });

});


// Define an empty cart array and total price variable
let cart = [];
let totalPrice = 0;

// Get all add-to-cart buttons
let addToCartButtons = document.querySelectorAll(".add-to-cart");

// Loop through all add-to-cart buttons
addToCartButtons.forEach(function(button) {

  // Add click event listener to each button
  button.addEventListener("click", function() {

    // Get the item ID from the button data attribute
    let itemId = button.getAttribute("data-id");

    // Check if item is already in the cart
    let itemInCart = cart.find(function(item) {
      return item.id === itemId;
    });

    // If item is not in the cart, add it
    if (!itemInCart) {
      cart.push({id: itemId, quantity: 1, price: parseInt(button.parentNode.previousElementSibling.innerHTML.slice(1))});
    } 
    // If item is already in the cart, increase quantity
    else {
      itemInCart.quantity++;
    }

    // Update the cart count and total price
    let cartCount = document.querySelector(".cart-icon .count");
    cartCount.innerHTML = cart.length;

    totalPrice += parseInt(button.parentNode.previousElementSibling.innerHTML.slice(1));
    let totalPriceCell = document.getElementById("total-price");
    totalPriceCell.innerHTML = "₹" + totalPrice;

  });

});



let addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    let productId = button.getAttribute("data-product-id");
    alert(`Product ${productId} added to cart!`);
  });
});
