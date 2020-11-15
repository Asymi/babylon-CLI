const getConversionFactor = require("./getConversionFactor")
const conversionTable = require("./conversionTable")

describe('conversion factor', () => {

    test('conversion factor is being read correctly from conversion table object for all unit pairs', () => {
        for (const unit1 in conversionTable) {
            for (const unit2 in conversionTable) {
                expect(getConversionFactor(unit1,unit2)).toBe(conversionTable[unit1][unit2])
            }
        }
    })

})
