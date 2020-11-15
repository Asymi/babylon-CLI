const converstionTable = require("./conversionTable")

const validateInput = (userInputString) => {
    
    if (userInputString.length === 0) {
        throw new Error(`Invalid command: no command entered after -c. Commands should take the form: babylon -c "<number> <unit1> in <unit2>"`)   
    }
    
    const userInputArray = userInputString.split(" ")
    const number = userInputArray[0]
    const unit1 = userInputArray[1]
    const theWordIn = userInputArray [2]
    const unit2 = userInputArray[3]

    // Can't account for symbolic representation of numbers like 5^2 or 5*10^-2 or 5*e^(-2) etc
    if (!(/^\d+$/.test(number)) || parseInt(number) < 0){
        throw new Error(`Invalid command: ${number} is not a valid number, please enter a nonnegative integer or a nonnegative floating-point number in digit form, symbolic representation of numbers is not supported. Commands should take the form: babylon -c "<number> <unit1> in <unit2>"`)
    } else if (!(unit1 in converstionTable)) {
        throw new Error(`Invalid command: ${unit1} is not a supported unit of measurement. The following units are currently supported ${Object.keys(converstionTable)}. Commands should take the form: babylon -c "<number> <unit1> in <unit2>"`)
    } else if (!(unit2 in converstionTable)) {
        throw new Error(`Invalid command: ${unit2} is not a supported unit of measurement. The following units are currently supported ${Object.keys(converstionTable)}. Commands should take the form: babylon -c "<number> <unit1> in <unit2>"`)
    } else if (theWordIn !== "in") {
        throw new Error(`Invalid command: commands should take the form: babylon -c "<number> <unit1> in <unit2>"`)
    } else {
        return userInputArray
    }
}

module.exports = validateInput;