const validateInput = require("./validateInput")

describe('user input validations', () => {

    test('doesn\'t accept empty commands', () => {
        expect(() => validateInput([])).toThrow(Error)
    })

    test('valid command format: <number> <unit1> in <unit2>', () => {
        expect(() => validateInput(['Lorem', 'Ipsum'])).toThrow(Error)
        expect(() => validateInput([ 250, 'cm', 'on', 'm' ])).toThrow(Error)
    })

    test('only nonnegative integers/floats allowed', () => {
        expect(() => validateInput([ -5, 'cm', 'in', 'm' ])).toThrow(Error)
        expect(() => validateInput([ '5t', 'cm', 'in', 'm' ])).toThrow(Error)
    })

    test('only supported units of measurement allowed', () => {
        expect(() => validateInput([ 250, 'kg', 'in', 'm' ])).toThrow(Error)
        expect(() => validateInput([ 250, 'cm', 'in', 'kg' ])).toThrow(Error)
    })

    test('returns an array of user input if all validations pass', () => {
        expect(validateInput([ 250, 'cm', 'in', 'm' ])).toStrictEqual([ 250, 'cm', 'in', 'm' ])
    })
})