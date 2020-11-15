const getConversionFactor = require("./getConversionFactor");

const calculateOutput = (userInputArray) => {
    const number = userInputArray[0]
    const unit1 = userInputArray[1]
    const unit2 = userInputArray[3]

    const conversionFactor = getConversionFactor(unit1, unit2)

    const result = {
        value: number * conversionFactor,
        unit: unit2
    }

    return result
}

module.exports = calculateOutput