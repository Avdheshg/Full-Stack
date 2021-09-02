const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

// rate and swap element
const swap = document.getElementById('swap');
const rateEl = document.getElementById('rate');

function calculate() {

    // Taking the value of both the select elements
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    console.log(currency_one, currency_two);

    // using the fetch API
    fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const rate = data.rates[currency_two];

            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;        

            amountEl_two.value = (rate * amountEl_one.value).toFixed(2);
        });
}

// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', function() {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

calculate();

























