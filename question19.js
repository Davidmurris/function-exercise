function checkGuess(userGuess,randomNumber) {
    let guess = userGuess
    if (guess === randomNumber) {
        return true
    } else {
        return false
    }

}

let check = checkGuess(65,78)
    console.log(check)
