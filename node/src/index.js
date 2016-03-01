// get the first command line argument
var number = process.argv.slice(2)[0];

if(isJuf(number)){
    console.log("juf!")
}

function isJuf(number){
    return isDivisibleBy7(number) || has7(number);
}

function has7(number){
    return /7/.test(String(number));
}

function isDivisibleBy7(number){
    return Number(number) % 7 === 0;
}

module.exports = {
    isJuf: isJuf,
    has7: has7,
    isDivisibleBy7: isDivisibleBy7
};