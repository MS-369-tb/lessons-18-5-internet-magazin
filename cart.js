function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  let itemCount = 0;

  for (const key in cart) {
    itemCount += cart[key].amound;
  }
  // изменяем количество товара в корзине в хедере
  document.querySelector("#count").textContent = itemCount;
}
updateCartCount();

let cart = JSON.parse(localStorage.getItem("cart")) || {}
// console.log(cart);

for (let key in cart) {
  const product = cart[key];
  // console.log(product.id, product.name)
  const productCart = document.createElement("div");
  productCart.className = "productCart";
  products.append(productCart);

  const imgCart = document.createElement("img");
  imgCart.src = `img/${product.id}.jpg`;
  imgCart.className = "imgNameCart";
  productCart.append(imgCart);

  const nameProduct = document.createElement("p");
  nameProduct.textContent = product.name;
  nameProduct.className = "imgNameCart";
  productCart.append(nameProduct);

  const price = document.createElement("p");
  price.textContent = product.price;
  price.className = "priceCart";
  productCart.append(price);

  const amount = document.createElement("p");
  amount.textContent = product.amound;
  amount.className = "amountCart"
  productCart.append(amount);

  const totalCart = document.createElement("p");
  totalCart.textContent = `${product.amound * product.price} $`;
  totalCart.className = "totalCart";
  productCart.append(totalCart);

}
