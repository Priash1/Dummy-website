var fact = 1;
function getFactorial(number) {
    for (var i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
var result = getFactorial(5);
console.log(result)