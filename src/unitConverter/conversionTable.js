const conversionTable = {
    "mm": {
        "mm": 1,
        "cm": 0.1,
        "m": 0.001,
    },
    "cm": {
        "mm": 10,
        "cm": 1,
        "m": 0.01,
    },
    "m": {
        "mm": 1000,
        "cm": 100,
        "m": 1,
    },
}

module.exports = conversionTable;