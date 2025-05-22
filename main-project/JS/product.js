const params = new URLSearchParams(window.location.search)
console.log(params.get('pid'))
const id= params.get('pid')
const fetchProductData = () =>
{
    fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => displayData(data))
		.catch((err)=>console.log(err))
}
fetchProductData()
const leftDiv = document.getElementById('leftDiv');
const rightDiv = document.getElementById('rightDiv');
const displayData = (data) =>
{
    const productImage = document.createElement('img');
    productImage.src = data.thumbnail;
    productImage.alt = data.title;
    leftDiv.appendChild(productImage);
    const productTitle = document.createElement("h2")
    productTitle.textContent = data.title;
    const productDesc = document.createElement("p")
    productDesc.textContent = data.description;
    const productPrice = document.createElement("p")
    productPrice.textContent = "Price: $"+ data.price;
    rightDiv.append(productTitle,productDesc,productPrice)
}