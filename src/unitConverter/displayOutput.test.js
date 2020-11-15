const displayModule = require("./displayOutput")
const { boxenOptions } = displayModule

describe('Output to user', () => {

    let chalkHelper;
    let boxenHelper;
    let displayOutput;
    
    beforeEach(() => {
        chalkHelper = jest.spyOn(displayModule, "chalkHelper")
        boxenHelper = jest.spyOn(displayModule, "boxenHelper")
        displayOutput = jest.spyOn(displayModule, "displayOutput")
    })

    test('Output is logged to the console', () => {
        const logSpy = jest.spyOn(console, "log")

        displayOutput(5, "cm", chalkHelper, boxenHelper)
        
        expect(logSpy).toBeCalled()
    })

    test('Output is formatted with boxen and chalk', () => {
        displayOutput(5, "cm", chalkHelper, boxenHelper)
        
        expect(chalkHelper).toBeCalled()
        expect(chalkHelper).toBeCalledWith(5,'cm')

        expect(boxenHelper).toBeCalled()
        expect(boxenHelper).toBeCalledWith(chalkHelper(5,'cm'), boxenOptions)
    })
})