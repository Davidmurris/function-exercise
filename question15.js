function validateUserName(username){
    if (username.length > 8) {
        return true
    }
    else{
        return false
    }

}

let name = validateUserName('chibueze')
console.log(name)