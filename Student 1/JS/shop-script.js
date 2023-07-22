// --------- Shop script file -----------


// containing all products into products array 

const products = [
    { id: 0, image: '/Images/1-iron-man.jpg', title: 'IRON MAN MARK XLIII', price: 399},
    { id: 1, image: '/Images/7-wolverine.jpg', title: 'WOLVERINE', price: 254},
    { id: 2, image: '/Images/5-storm.jpg', title: 'STORM', price: 349},
    { id: 3, image: '/Images/8-yennefer.jpg', title: 'YENNEFER', price: 389}
];

let i = 0;
document.getElementById('root').innerHTML = products.map((item) =>{
    var {image, title, price} = item;
    return(
        `<div class='box-container'>
            <div class='box'>
                <img src= ${image} alt="ironman"></img>
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

function displayCart(a){
    let j = 0;
    if(cart.length == 0) document.getElementById('cartItem').innerHTML = "Your cart is empty";
    else {
        document.getElementById('cartItem').innerHTML = cart.map((items) =>
        {
            var {image, title, price} = items;
            return(
                `<div class = 'cart-item'>
                    <div class = 'row-img'>
                        <img class = 'rowImg' src = ${image}>
                    <div>
                    <p style = 'font-size: 12px;'>${title}</p>
                    <h2 style = 'font-size: 15px;'>$ ${price}</h2>` + 
                    "<i class = 'fa-solid fa-trash' onclick = 'delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

  