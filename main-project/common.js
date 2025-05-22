const count = document.getElementById('count');
const cartItems = JSON.parse(localStorage.getItem('cartItems')) ?? [];
count.textContent= cartItems.length
function addToCart (item)
{
    alert("added successfully");
    console.log(item)
    cartItems.push(item);
    count.textContent = cartItems.length
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}