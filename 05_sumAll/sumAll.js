const sumAll = function() {
    let num1; //smaller
    let num2; //larger
    let sum = 0;

    for(const arg of arguments) {
        if(typeof arg != 'number' && typeof arg != 'bigint' || isNaN(arg) == true){
            return "ERROR";
        } else if(arg < 0) {
            return "ERROR";
        } else {
            continue;
        }
    }
    if(arguments[0] <= arguments[1]) {
        num1 = arguments[0];
        num2 = arguments[1];
    } else {
        num1 = arguments[1];
        num2 = arguments[0];
    }

    for(let i = num1; i <= num2; i++) {
        sum = sum+i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
