// console.log("hello world");
function isPrime(number) {
    var isPrime = true;
    if (number < 2) {
        isPrime = true;
    }
    else if (number > 2) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
var arr = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var sum = 0;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var number = arr_1[_i];
    if (isPrime(number)) {
        sum += number;
        console.log("Số nguyên tố: " + number);
    }
}
console.log("Tổng: " + sum);
