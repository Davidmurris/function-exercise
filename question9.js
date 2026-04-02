function calculator(a,b){
    let add =  (a + b) 
    let diff = (a - b)
    let multiply = (a * b)

    let result = `${add} , ${diff} , ${multiply}`
    return result

}

let result = calculator(6,2);
console.log(result)
