const conversionTable = require("./conversionTable");

const getConversionFactor = (unit1, unit2) => {
    for (const unit in conversionTable) {
        if (unit === unit1) {
            const factor = conversionTable[unit1][unit2]
            return factor
        }
    }
}

module.exports = getConversionFactor;