const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")







function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToDay = 5.2 
    const euroToDay = 6.2

    


    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
         }).format(inputCurrencyValue / dolarToDay)
    }


    if(currencySelect.value == "euro" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToDay )
    }


    
     currencyValueToConvert.innerHTML =  new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"

     }).format(inputCurrencyValue)


     
    
    
    
    
    
}


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar"
    currencyImage.src = "./assets/dolar.png"
}


if(currencySelect.value == "euro" ){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
}


convertValues()

   

}



currencySelect.addEventListener("change",changeCurrency )
convertButton.addEventListener("click", convertValues)



