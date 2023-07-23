// --------- Checkout script file -----------

let isDetailsCompleted = false;

const formBilling = document.getElementById("form-billing");
const billingOverlay = document.createElement("div");
billingOverlay.id = "billing-overlay";

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else {
    ready();  
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    const emailParam = urlParams.get('email');
    const subTotalParam = urlParams.get('subtotal');
    const nItemsParam = urlParams.get('nItems');

    if(nameParam || emailParam) {
        document.getElementById('fname').value = nameParam;
        document.getElementById('email').value = emailParam;
    }
    if(subTotalParam && nItemsParam) {
        const cartCount = document.getElementById('cart-count');
        const subTotal = document.getElementById('sub-total');
        const billAmount = document.getElementById('bill-amount');

        cartCount.innerText = nItemsParam;
        subTotal.innerText = "$ " + parseFloat(subTotalParam).toFixed(2);

        const Fee = parseFloat(document.getElementById('deli-fee').innerText.replace("$",""));
        
        const Sub = parseFloat(subTotalParam);
        const total = Sub + Fee;
        billAmount.innerText = "$ " + total.toFixed(2);
    }
});

function ready(){
    billingOverlay.id = "billing-overlay";
    const formLink = document.getElementById("form-link");
    const form = document.getElementById('form-billing');
    const formPayment = document.getElementById("form-payment");

    formLink.addEventListener("click", billingLinkClicked);
    billingOverlay.addEventListener("click", overlayClicked);
    form.addEventListener('submit', formSubmitted);
    form.addEventListener("reset", formReseted)
    formPayment.addEventListener("submit", formPaymentSubmitted)
}

function formClosed(event){
    billingOverlay.classList.remove("show");
    document.body.removeChild(billingOverlay);
    formBilling.style.display = "none";
}

function billingLinkClicked(event) {
    event.preventDefault();
    
    billingOverlay.classList.add("show");
    document.body.appendChild(billingOverlay);
    billingOverlay.appendChild(formBilling);
    
    formBilling.style.display = "block";
}


function overlayClicked(event) {
    if (event.target === billingOverlay) {
      billingOverlay.classList.remove("show");
      document.body.removeChild(billingOverlay);
      formBilling.style.display = "none";
    }
}

function formPaymentSubmitted(event){
    const formPayment = document.getElementById("form-payment");
    
    const cardNumber = formPayment.querySelector("#cnumber")
    const cardName = formPayment.querySelector("#cname")
    const cvc = formPayment.querySelector("#cvc")
    const expMonth = formPayment.querySelector("#expmonth")
    const expYear = formPayment.querySelector("#expyear")

    const monthValue = parseInt(expMonth.value.trim());
    const yearValue = parseInt(expYear.value.trim());

    event.preventDefault();
    if(!isDetailsCompleted){
        alert('Please submit the form in the "Edit Details".');
        return;
    }

    if (cardNumber.value.trim() === '' || isNaN(cardNumber.value.trim()) || cardNumber.value.trim().length !== 16) {
        alert('Please enter a valid card number.');
        cardNumber.focus();
        return;
    }

    if (cardName.value.trim() === '') {
        alert('Please enter your name on your card.');
        cardName.focus();
        return;
    }

    if (cvc.value.trim() === '' || isNaN(cvc.value.trim()) || cvc.value.trim().length !== 3) {
        alert('Please enter a valid cvv.');
        cvc.focus();
        return;
    }

    if (expMonth.value.trim() === '') {
        alert('Please enter a epxiration month.');
        expMonth.focus();
        return;
    }else if (isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
        alert('Please enter a valid expiration month.');
        return;
    }

    if (expYear.value.trim() === '' || isNaN(yearValue) || yearValue < 23) {
        alert('Please enter a valid expiration year.');
        expYear.focus();
        return;
    }

    alert('Payment Confirmed Successfully')
    formPayment.reset();
}

function formSubmitted(event) {
    const form = document.getElementById('form-billing');

    const name = form.querySelector('#fname');
    const contactNo = form.querySelector('#contact');
    const email = form.querySelector('#email');
    const address = form.querySelector('#address');
    const province = form.querySelector('#province');
    const day = form.querySelector('#day');
    const month = form.querySelector('#month');
    const year = form.querySelector('#year');

    const contactValue = parseInt(contactNo.value.trim());
    const dayValue = parseInt(day.value.trim());
    const monthValue = parseInt(month.value.trim());
    const yearValue = parseInt(year.value.trim());

    event.preventDefault();

    if (name.value.trim() === '') {
        alert('Please enter your name.');
        name.focus();
        return;
    }
    if (contactNo.value.trim() === '' || contactNo.value.trim().length !== 10) {
        alert('Please enter a valid contact number.');
        contactNo.focus();
        return;
    }
    if (email.value.trim() === '') {
        alert('Please enter your email address.');
        email.focus();
        return;
    }

    if (address.value.trim() === '') {
        alert('Please enter your address.');
        address.focus();
        return;
    }

    if (province.value.trim() === '') {
        alert('Please select your province.');
        province.focus();
        return;
    }

    if (day.value.trim() === '' || month.value.trim() === '' || year.value.trim() === '') {
        alert('Please enter your date of birth.');
        day.focus();
        return;
    }else if (isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue)) {
        alert('Please enter valid numbers for day, month, and year.');
        return;
    }else if (dayValue < 1 || dayValue > 31 || monthValue < 1 || monthValue > 12 || yearValue < 1900 || yearValue > 2023) {
        alert('Please enter a valid date of birth.');
        return;
    }

    isDetailsCompleted = true;
    alert('Submitted successfully. Now you can confirm your order in checkout')
}

function formReseted(event){
    const form = document.getElementById('form-billing');

    form.reset();
}