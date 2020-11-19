
fetch(`https://api.exchangeratesapi.io/latest`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

const baseCurrency = document.getElementById('select-base-currency')
const targetCurrency = document.getElementById('select-target-currency')
const convert = document.getElementById('convert-button')
const amountToBeConverted = document.getElementById('currency-amount')

convert.addEventListener('click', function() {
    console.log("convert!")
})

amountToBeConverted.addEventListener('input', function() {
    console.log("do math")
})