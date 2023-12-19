const convertButton = document.querySelector(".convert-button")

function convertValues(){
   const inputCurrencyVakue = document.querySelector(".input-currency").value 
   const inputCurrencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
   const inputCurrencyValueConverted = document.querySelector(".currency-value") // outras moedas

   const dolarToday = 5.2

   const convertedValue = inputCurrencyValue / dolarToday

    

   console.log(convertedValue)

}

convertButton.addEventListener("click", convertValues)