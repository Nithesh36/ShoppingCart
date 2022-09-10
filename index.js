let Quantity = 1;
let CartItem;
let confirmationCartAdded = false;
const incrementBtn = document.getElementById("increment");
 document.getElementById("qtyViewCart").innerText = 1;
//before added to cart
incrementBtn.addEventListener("click", () => {
  Quantity = Quantity + 1;
  document.getElementById("qty").innerText = Quantity;
});

const decrementBtn = document.getElementById("decrement");
decrementBtn.addEventListener("click", () => {
  if(Quantity>0)
  Quantity = Quantity - 1;
  document.getElementById("qty").innerText = Quantity;
});
let StoreItem;
//after added to cart
const incCartItemsBtn = document.getElementById("cartInc");
incCartItemsBtn.addEventListener("click", () => {
  Quantity = Quantity + 1;
let updateVal=document.getElementById(" qtyViewCart").value
  document.getElementById("qtyViewCart").innerText =updateVal;

  StoreItem = document.getElementById("Item").innerText =
    CartItem + " " + "quantity is =" + Quantity;
  document.getElementById("qty").innerText = Quantity;
});
//after added to cart
const dropCartItemBtn = document.getElementById("cartDec");
dropCartItemBtn.addEventListener("click", () => {
  if(Quantity>0)
  Quantity = Quantity - 1;
  document.getElementById("qtyViewCart").innerText = Quantity;
  StoreItem = document.getElementById("Item").innerText =
    CartItem + " " + "quantity is =" + Quantity;
 let updateDec=document.getElementById(" qtyViewCart").value;

  document.getElementById("qty").innerText = updateDec;
});
//used to add product to cart
const addtocart = document.getElementById("pd1");
addtocart.addEventListener("click", () => {
  CartItem = document.getElementById("Pd_no1").innerText;
  StoreItem = document.getElementById("Item").innerText =
    CartItem + " " + "quantity is =" + Quantity;
  console.log(StoreItem + "cartFunc");
});

//used to manully enter Quantity
const enterManualData = document.getElementById("manualEntry");
enterManualData.addEventListener("change", (e) => {
  StoreItem = document.getElementById("Item").innerText =
    CartItem + " " + "quantity is =" + e.target.value;
   document.getElementById("qty").innerText = e.target.value;
 enterManualData.value='';
});
//show the  items in the cart
const showCart = document.getElementById("showCart");
showCart.addEventListener("click", () => {
  //alert(StoreItem +"quantity is =" + Quantity)
  document.getElementById("CartItems").style.display = "block";
  confirmationCartAdded = true;
});
//remove all products in the cart
const removeCart = document.getElementById("removeCart");
removeCart.addEventListener("click", () => {
  if (confirmationCartAdded)
    document.getElementById("CartItems").style.display = "none";
   document.getElementById("qty").innerText=0;
 document.getElementById(" qtyViewCart").value=0;
  
});
