const currency_one = document.querySelector('#currency-one');
const amount_one = document.querySelector('#amount-one');
const currency_two = document.querySelector('#currency-two');
const amount_two = document.querySelector('#amount-two');

const swapBtn = document.getElementById('swap');
const result = document.getElementById('rate');

function calculate(){
    let currency_one_value = currency_one.value;
    let currency_two_value = currency_two.value;

    fetch('https://open.exchangerate-api.com/v6/latest')
    .then((res) => res.json())
    .then(data =>{
        // console.log(data.rates)
        const rates = data.rates[currency_two_value] / data.rates[currency_one_value];
        result.innerHTML = `1${currency_one_value} = ${rates} ${currency_two_value}`;
        amount_two.value = (amount_one.value * rates).toFixed(2);
    })
    .catch(error => console.log(error))
}
calculate();
currency_one.addEventListener('change',calculate);
amount_one.addEventListener('input',calculate);
currency_two.addEventListener('change',calculate);
amount_two.addEventListener('input',calculate);

swapBtn.addEventListener('click', () => {
    const temp = currency_one.value;
    currency_one.value = currency_two.value
    currency_two.value = temp;
    calculate();
})