
let cartItemCount = 0;


function addToCart() {
  
  cartItemCount++;
  
  
  document.getElementById("cartItemCount").textContent = cartItemCount;
  
 
  alert("Le produit a été ajouté au panier !");
}