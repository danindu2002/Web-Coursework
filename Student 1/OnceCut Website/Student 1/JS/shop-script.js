// --------- Shop script file -----------


// containing all products into a products array 
const products = [
    { id: 0, image: 'Images/1-iron-man.jpg', title: 'IRON MAN MARK XLIII', price: 399},
    { id: 1, image: 'Images/7-wolverine.jpg', title: 'WOLVERINE', price: 254},
    { id: 2, image: 'Images/5-storm.jpg', title: 'STORM', price: 349},
    { id: 3, image: 'Images/8-yennefer.jpg', title: 'YENNEFER', price: 389},
    { id: 4, image: 'Images/3-general-grievous.jpg', title: 'GENERAL GRIEVOUS', price: 249},
    { id: 5, image: 'Images/2-gambit.jpg', title: 'GAMBIT DELUXE', price: 239},
    { id: 6, image: 'Images/4-the-crow.jpg', title: 'THE CROW', price: 179},
    { id: 7, image: 'Images/6-rey.jpg', title: 'REY', price: 342},
];

// displaying each product
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

// updating cart and quantity
var cart = [];

function addToCart(a){
    const exisitngItemIndex = cart.findIndex(item => item.id === products[a].id);
    
    if(exisitngItemIndex !== -1){
        cart[exisitngItemIndex].quantity++;
    }
    else{
        cart.push({...products[a], quantity: 1});
    }

    displayCart();
}

// delecting elemnt from the cart
function delElement(a){
    cart.splice(a, 1);
    displayCart();
}

// displaying cart
function displayCart(a){
    let j = 0, total = 0;
    const cartItemContainer = document.getElementById('cartItem');
    const cartTotalElement = document.getElementById('total');

    document.getElementById("count").innerHTML = cart.length;
    if(cart.length == 0) {
        cartItemContainer.innerHTML = "Your cart is empty";
        cartTotalElement.innerHTML = "$ " + 0.00;
    }
    else {
        cartItemContainer.innerHTML = `
            <div class="cart-item-container">
                ${cart.map((items) => {
                var {image, title, price, quantity} = items;
                total += price * quantity;
                cartTotalElement.innerHTML = "$ " + total;
                return(
                    `<div class = 'cart-item'>
                            <div class = 'row-img'>
                                <img class = 'rowImg' src = ${image}>
                            </div>
                            <div>
                                <p class='cart-name'>${title}</p>
                                <h2 class='cart-price'>$ ${price} * ${quantity}</h2> 
                                <i id='trash-icon'class = 'fa-solid fa-trash' onclick = 'delElement(${(j++)})'></i>
                            </div>
                        </div>`
                    );
                 }).join('')}
            </div>
        `;
    }

    // disabling the checkout buttton if there are no items in the cart
    const checkoutButton = document.getElementById('checkout');
    const checkoutLink = document.getElementById('checkoutLink');

    if(cart.length === 0){
        checkoutButton.classList.add('disabled');
        checkoutLink.removeAttribute('href');
        checkoutLink.style.pointerEvents = 'none';
        checkoutLink.style.color = 'gray';
    }
    else{
        checkoutButton.classList.remove('disabled');
        checkoutLink.setAttribute('href', '/checkout.html');
        checkoutLink.style.pointerEvents = 'auto';
        checkoutLink.style.color = 'black';
    }
}

// appending parameters to the URL
function redirectToCheckout(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    let subtotal = 0;
    for(const item of cart){
        subtotal += item.price * item.quantity;
    }

    const nItems = cart.length;
    const checkoutLink = document.getElementById('checkoutLink');
    /*NOTE: "C:/DANINDU/LECTURES/UoW%20Modules/Semester%202/Web/Coursework/coursework/Student%201/" This part of the absolute path should be 
    deleted in the file that I uploaded to BlackBoard in order to load the checkout page in any machine*/
    checkoutLink.href = `checkout.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&subtotal=${encodeURIComponent(subtotal)}&nItems=${encodeURIComponent(nItems)}`;
}

// pop up behaviour of the sidebar
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const chechoutButton = document.getElementById('checkout');

function showSidebar(){
    sidebar.style.right = '0';
    overlay.style.display = 'block';
    chechoutButton.style.display = 'block';
}

function hideSidebar(){
    sidebar.style.right = '-40%';
    overlay.style.display = 'none';
    chechoutButton.style.display = 'none';
}

document.querySelector('.cart').addEventListener('click', showSidebar);

overlay.addEventListener('click', hideSidebar);
sidebar.addEventListener('click', function(event){
    event.stopPropagation();
});

displayCart();
hideSidebar();

