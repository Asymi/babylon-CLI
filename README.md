# Babylon-CLI

## This is a Command Line Interface to convert between SI units of length, currently only units of mm, cm, and m are supported.

To build this code on your machine:
1. Clone this repository
1. `cd` into the hello-cli directory
1. Run `npm install -g .` (the dot is important), this will install the package on your machine globally - allowing it to be accessed from anywhere within the terminal
1. Type `babylon` followed by `-c "<number> <unit1> in <unit2>` for example `babylon -c 50 cm in m` and then hit enter
1. You should expect the CLI to print output to the terminal of the form `<number> <unit>` for example `0.5m`