const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? []
function displayData (){
    cartItems.forEach((v, i) =>
    {
        const productDiv = document.createElement('div');
        productDiv.classList.add("d-flex","justify-space-between","border","border-2","border-black","cartItem")
        const productImage = document.createElement('img');
    productImage.src = v.thumbnail;
        productImage.alt = v.title;
        productImage.height="50"
    const productTitle = document.createElement("h2")
    productTitle.textContent = v.title;
    const productPrice = document.createElement("p")
        productPrice.textContent = "Price: $" + v.price;
        const deleteButton = document.createElement('button');
        deleteButton.textContent= "❎"
        productDiv.append(productImage,productTitle,productPrice,deleteButton)
        document.getElementById('main').appendChild(productDiv)
    })
}
displayData()