function leapYear(year){
    if (year % 4===0 )
        return 'leap year'
    else{
        return !leapYear
    }
}
 let leap = leapYear(2020)
 console.log(leap)