const calculateOutput = require("./calculateOutput")

test('correct output is calculated', () => {
    const result = {
        value: 0.3,
        unit: "m"
    }

    expect(calculateOutput(["30", "cm", "in", "m"])).toStrictEqual(result)
})