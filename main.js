let productsJSON = `[
    {
        "name": "Green Hoodie",
        "id": "greenh",
        "price": 30
    },
    {
        "name": "Blue Hoodie",
        "id": "blueh",
        "price": 30
    },
    {
        "name": "Yellow Hoodie",
        "id": "yellowh",
        "price": 30
    },
        {
        "name": "White Hoodie",
        "id": "whiteh",
        "price": 30
    }
    ]`;

let positionProducts = JSON.parse(productsJSON);
console.log(positionProducts);

for (let element of positionProducts) {
    console.log(element);
    const cell = document.createElement("div");
    cell.className = "cell";
    board.append(cell);

    const image = document.createElement("img");
    image.src = `img/${element.id}.jpg`;
    cell.append(image);

    const namePosition = document.createElement("p");
    namePosition.className = "namePosition";
    namePosition.textContent = `${element.name}`;
    cell.append(namePosition);

    const pricePosition = document.createElement("p");
    pricePosition.className = "pricePosition";
    pricePosition.textContent = `${element.price}$`;
    cell.append(pricePosition);

  // cell.innerHTML += '<div class="board">Text</div>'   можно так создать div с классом board

    const buttonCell = document.createElement("div");
    buttonCell.className = "buttonCell";
    buttonCell.textContent = `Купить ${element.name}`;
    cell.append(buttonCell);

    cell.onclick = () => addToCart(element);
}


// Инструкция по созданию функции addToCart. Эта функция - обработчик, как раз будет добавлять в корзину. Подписи под кодом - комментарии к коду, а не следующий шаг

// Получение корзины покупок из localStorage:
// let cart = JSON.parse(localStorage.getItem("cart")) || {};
// Используйте JSON.parse для преобразования строки из localStorage в объект.
// Если корзина пустая, инициализируйте пустой объект {}.
// Проверка наличия продукта в корзине:
// if (cart[product.id]) {
//   cart[product.id].amount += 1;
// } else {
//   cart[product.id] = { ...product, amount: 1 };
// }
// //    - Если продукт уже в корзине, увеличьте его количество (amount) на 1.  
// //    - Если продукта нет, добавьте его в корзину с количеством 1.
// Сохранение обновленной корзины:
// localStorage.setItem("cart", JSON.stringify(cart));
// Преобразуйте объект корзины в строку с помощью JSON.stringify и сохраните его в localStorage.
// Обновление отображения количества товаров:
// updateCartCount();
// Вызовите функцию updateCartCount для обновления отображения количества товаров в корзине.


function addToCart(product) {
    let messageClic = `Купить ${product.name}`;
    alert(messageClic);

  //Получаем данные из local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
  // [product.id] - ключ объекта    cart - пустой объект     В переменную карт создай ключ
    if (cart[product.id]) {
    cart[product.id].amound += 1;
    } else {
    // ... скопировать все из объекта
    cart[product.id] = { ...product, amound: 1 };
    }
  //Сохраняем значение в local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  //Обновляет количество в корзине товора
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    let itemCount = 0;

    for (const key in cart){
        itemCount += cart[key].amound;
    }
    // изменяем количество товара в корзине в хедере
    document.querySelector("#count").textContent = itemCount;
}
updateCartCount();

