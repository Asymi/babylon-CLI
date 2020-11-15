const chalk = require("chalk");
const boxen = require("boxen");

// Helper functions added to make code easy to test
const chalkHelper = (value, unit) => {
    return chalk.white.bold(`${value}${unit}`)
}

const boxenHelper = (output, boxenOptions) => {
    return boxen(output, boxenOptions)
}

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
};

const displayOutput = (value, unit, callback1, callback2) => {
    const output = callback1(value, unit);
    const message = callback2(output, boxenOptions);
    console.log(message)
}

module.exports = {
    "displayOutput": displayOutput,
    "chalkHelper": chalkHelper,
    "boxenHelper": boxenHelper,
    "boxenOptions": boxenOptions
};