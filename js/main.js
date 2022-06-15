/* richiesta dati per calcolo biglietto */
// variabile per dare l'input al bottone
const button = document.querySelector('#sending-button');
button.addEventListener('click', function () {

// variabile per chiedere i chilometri che vuole percorrere
const userKm = document.querySelector('#input-km').value;

// variabile per chiedere l'età dell'utente, così da capire se possibile applicare lo sconto
const userAge = document.querySelector('#input-age').value;


/* eseguiamo i calcoli per il costo biglietto */
const priceKm = 0.26;
let NotDiscountedPrice = userKm * priceKm;

// controllo che i dati inseriti siano corretti 
if ((isNaN(userKm) == true)  || (isNaN(userAge) == true) ||  (userKm < 0) || (userAge < 0)) {
    console.log('Error, number not accepted, reload the page');
    // inserisco gli sconti in base all'età
    } else {
        if (userAge < 18) {
        let DiscountedPrice = NotDiscountedPrice - NotDiscountedPrice * 15 / 100;
        console.log('The price of your ticket is ' + NotDiscountedPrice.toFixed(2), 
        'but because you are a minor you received a discount, the price of the discounted ticket is ' + DiscountedPrice.toFixed(2));
    } else if (userAge >= 65) {
        let DiscountedPrice = NotDiscountedPrice - NotDiscountedPrice * 35 / 100; 
        console.log('The price of your ticket is ' + NotDiscountedPrice.toFixed(2), 
        'but since you are over 65 years old you received a discount, the price of the discounted ticket is ' + DiscountedPrice.toFixed(2));
    } else {
        console.log('The price of your ticket is ' +NotDiscountedPrice.toFixed(2));
    }
    }
})