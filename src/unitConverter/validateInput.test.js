const validateInput = require("./validateInput")

describe('user input validations', () => {

    test('valid command format: <number> <unit1> in <unit2>', () => {
        expect(() => validateInput("Lorem Ipsum")).toThrow(Error)
        expect(() => validateInput("5 m on cm")).toThrow(Error)
    })

    test('only nonnegative integers/floats allowed', () => {
        expect(() => validateInput("-5 m in cm")).toThrow(Error)
        expect(() => validateInput("5t m in cm")).toThrow(Error)
    })

    test('only supported units of measurement allowed', () => {
        expect(() => validateInput("5 kg in cm")).toThrow(Error)
        expect(() => validateInput("5 m in kg")).toThrow(Error)
    })

    test('returns an array of user input if all validations pass', () => {
        expect(validateInput("50 cm in m")).toStrictEqual(["50","cm","in","m"])
    })
})