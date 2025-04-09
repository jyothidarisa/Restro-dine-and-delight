let total = 0;
let cartItems = [];
function addItem(price,name, quantityId) {
     const quantity = document.getElementById(quantityId).value;
     const totalPrice = price * quantity;
     if(quantity > 0){
          const item = {
               name: name,
               price: price,
               quantity: quantity,
               totalPrice: totalPrice
             };
             cartItems.push(item);
             updateCart();
             total += totalPrice;
             document.getElementById('total').innerText = total;
             console.log(`Item ${name} with price ₹${price} and quantity ${quantity} added to cart. Total price: ₹${totalPrice}`);
     }
     else{
          alert("Please enter a number greater than zero");
     }
   }
function updateCart() {
     const cartList = document.getElementById("cart-items");
     cartList.innerHTML = "";
     cartItems.forEach(item => {
       const listItem = document.createElement("li");
       listItem.textContent = `${item.name} x ${item.quantity} - ₹${item.totalPrice}`;
       cartList.appendChild(listItem);
     });
   }
   document.addEventListener('DOMContentLoaded', function() {
     const menuItems = document.querySelectorAll('.menu-items li');
   
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.style.opacity = 1; // Make visible
           entry.target.classList.add('fade-in'); // Add class for animation
         }
       });
     });
   
     menuItems.forEach(item => {
       observer.observe(item);
     });
   });