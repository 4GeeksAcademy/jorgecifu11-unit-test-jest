const sum = (a,b) => {
    return a + b
}

const result = sum(7,3)
console.log(result);

let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromEuroToDollar = function(valueInEuro) {

    let valueInDollar = valueInEuro * oneEuroIs.USD;

    return valueInDollar.toFixed(2);
}

const fromDollarToYen = function(valueInDollar){
    const oneDollarToEuro = 1/oneEuroIs.USD
    const oneDollarToYen = oneDollarToEuro*oneEuroIs.JPY

    let valueInYen = valueInDollar * oneDollarToYen;

    return valueInYen.toFixed(2);
}

const fromYenToPound = function(valueInYen) {
    const oneYenToEuro = 1/oneEuroIs.JPY
    const oneYenToPound = oneYenToEuro*oneEuroIs.GBP
    
    let valueInPound = valueInYen * oneYenToPound;

    return valueInPound.toFixed(2);
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }