const yargs = require("yargs");

const getArgsFromCmdLine = () => {
    const options = yargs
    .usage("Usage: -c <number> <unit1> in <unit2>")
    .option("c", { alias: "convert", describe: "Converts a floating point <number> in units of <unit1> to units of <unit2> ", type: "array", demandOption: true })
    .argv;

    console.log(options)
    return options
}

module.exports = getArgsFromCmdLine;
// Not sure how to test this due to mocking of command line arguments that is required