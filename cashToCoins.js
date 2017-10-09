
//Total dollars
let dollarAmount = 557.47

//What's in the piggyBank
let piggyBank = {
    "quarters": 0,
    "dimes": 0,
    "nickels": 0,
    "pennies": 0
}

// Running total through coin counter

while (dollarAmount >= .01) {
    if (dollarAmount >= .25) {
        dollarAmount -= .25
        piggyBank.quarters += 1
    }
    else if (dollarAmount >= .10) {
        dollarAmount -= .10
        piggyBank.dimes += 1
    }
    else if (dollarAmount >= .05) {
        dollarAmount -= .05
        piggyBank.nickels += 1
    }
    else if (dollarAmount >= .01) {
        dollarAmount -= .01
        piggyBank.pennies += 1
    }
}
console.log(piggyBank)


