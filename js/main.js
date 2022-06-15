/* richiesta dati per calcolo biglietto */
const priceKm = 0.26;

// variabile per chiedere i chilometri che vuole percorrere
const userKm = document.querySelector('#input-km').value;

// variabile per chiedere l'età dell'utente, così da capire se possibile applicare lo sconto
const userAge = document.querySelector('#input-age').value;

// variabile per chiedere il nome e cognome all'utente
const userDates = document.querySelector('#input-name-lastname').value;

// variabile per dare l'input al bottone submiy
const submit = document.querySelector('#sending-button');

/* eseguiamo i calcoli per il costo biglietto */
submit.addEventListener('click',function () {
    const userDates = document.querySelector('#input-name-lastname').value;
    const userKm = document.querySelector('#input-km').value;
    const userAge = document.querySelector('#input-age').value;
    let NotDiscountedPrice = userKm * priceKm;

// controllo che i dati inseriti siano corretti 
if ((userKm < 0) || (userAge <= 0)) {
    alert ('Error, incorrect data, reload the page');
    // inserisco gli sconti in base all'età
    } else {
        document.querySelector('#ticket-name').innerHTML = userDates;
        document.querySelector('#user-carriage').innerHTML = (Math.floor(Math.random()*10000)+1);
        document.querySelector('#user-code').innerHTML = (Math.floor(Math.random()*100)+1);
        if (userAge < 18) {
        let DiscountedPrice = NotDiscountedPrice - NotDiscountedPrice * 15 / 100;
        document.querySelector('#price-ticket').innerHTML = 'Because you are a minor you received a discount, the price of the discounted ticket is ' + DiscountedPrice.toFixed(2) + "€";
    } else if (userAge >= 65) {
        let DiscountedPrice = NotDiscountedPrice - NotDiscountedPrice * 35 / 100; 
        document.querySelector('#price-ticket').innerHTML = 'Since you are over 65 years old you received a discount, the price of the discounted ticket is ' + DiscountedPrice.toFixed(2) + "€";
    } else {
        document.querySelector('#price-ticket').innerHTML = 'The price of your ticket is ' + NotDiscountedPrice.toFixed(2) + "€";
    }
    }
})

// variabile per dare l'input al bottone reset
const reset = document.querySelector('#reset-button');
reset.addEventListener(`click`,
function(){
    document.querySelector(`#input-name-lastname`).value = ``;
    document.querySelector(`#input-km`).value = ``;
    document.querySelector('#input-age').value = ``;
})