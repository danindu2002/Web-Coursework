// --------- Shop script file -----------


// containing all products into products array 

const products = [
    { id: 0, image: '/Images/1-iron-man.jpg', title: 'IRON MAN MARK XLIII', price: 399},
    { id: 1, image: '/Images/7-wolverine.jpg', title: 'WOLVERINE', price: 254},
    { id: 2, image: '/Images/5-storm.jpg', title: 'STORM', price: 349},
    { id: 3, image: '/Images/8-yennefer.jpg', title: 'YENNEFER', price: 389},
    { id: 4, image: '/Images/3-general-grievous.jpg', title: 'GENERAL GRIEVOUS', price: 249},
    { id: 5, image: '/Images/2-gambit.jpg', title: 'GAMBIT DELUXE', price: 239},
    { id: 6, image: '/Images/4-the-crow.jpg', title: 'THE CROW', price: 179},
    { id: 7, image: '/Images/6-rey.jpg', title: 'REY', price: 3},
];

let i = 0;
document.getElementById('root').innerHTML = products.map((item) =>{
    var {image, title, price} = item;
    return(
        `<div class='box-container'>
            <div class='box'>
                <img class="main-img"src= ${image} alt="item-photo"></img>
                <h3 class="name">${title}</h3>
                <h4 class="price">$ ${price}</h4>` +
                "<div class='btn' onclick = 'addToCart("+ (i++) +")'>Add to Cart</div>" +
            `</div>
        </div>`
    );
}).join('')

var cart = [];

function addToCart(a){
    cart.push({...products[a]});
    displayCart();
}

function delElement(a){
    cart.splice(a, 1);
    displayCart();
}

function displayCart(a){
    let j = 0, total = 0;
    const cartItemContainer = document.getElementById('cartItem');
    const cartTotalElement = document.getElementById('total');
    const footerElement = document.querySelector('.foot');

    document.getElementById("count").innerHTML = cart.length;
    if(cart.length == 0) {
        cartItemContainer.innerHTML = "Your cart is empty";
        cartTotalElement.innerHTML = "$ " + 0.00;
    }
    else {
        cartItemContainer.innerHTML = `
            <div class="cart-item-container">
                ${cart.map((items) => {
                var {image, title, price} = items;
                total += price;
                cartTotalElement.innerHTML = "$ " + total;
                return(
                    `<div class = 'cart-item'>
                            <div class = 'row-img'>
                                <img class = 'rowImg' src = ${image}>
                            </div>
                            <div>
                                <p class='cart-name'>${title}</p>
                                <h2 class='cart-price'>$ ${price}</h2> 
                                <i id='trash'class = 'fa-solid fa-trash' style='color: #35c2a8; transform: scale(1.1);' onclick = 'delElement(${(j++)})'></i>
                            </div>
                        </div>`
                    );
                 }).join('')}
            </div>
        `;
    }
}
