//Targeting the elements with ids
const inputEl = document.getElementById("input-el")
const selectEl = document.getElementById("select-el")
const display = document.querySelector("span")
let weight = ""
let k = 0.454 //k is a constant since 1 kg = 0.454lbs. 
let unit = ""

 //This function calls out the converter() and displays the converted weight
function converta() {
    display.textContent = converter()
}

//This function converts the weight depending on the desired unit
function converter() {
    weight = inputEl.value
    unit = selectEl.value
    let convertedWeight = 0
    if (unit === selectEl.options[0].text) {
        convertedWeight = (parseFloat(weight) / k).toFixed(2)//The to fixed method is used to ensure the decimal places aren't more than 2
        convertedWeight += "lbs"

    } else {
        convertedWeight = (parseFloat(weight) * k).toFixed(2)
        convertedWeight += "kg"
    }
    return convertedWeight
}

converter()


