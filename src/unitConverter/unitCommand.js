const getArgsFromCmdLine = require("./getArgsFromCmdLine");
const calculateOutput = require("./calculateOutput");
const { displayOutput, chalkHelper, boxenHelper } = require("./displayOutput");
const validateInput = require("./validateInput");

const unitCommand = () => {
    const options = getArgsFromCmdLine()
    const userInputArray = validateInput(options.c)
    const output = calculateOutput(userInputArray)
    displayOutput(output.value, output.unit, chalkHelper, boxenHelper)
}

module.exports = unitCommand;

// run "npm test -- --coverage" to get test coverage