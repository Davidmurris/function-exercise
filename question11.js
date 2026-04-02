function getGrade(pointEarned,possiblePoint){
    let score = pointEarned / possiblePoint * 100
    return Math.round(score)
}

let score = getGrade(50,90) 
console.log(score)