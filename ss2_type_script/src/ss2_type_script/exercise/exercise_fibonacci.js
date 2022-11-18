var checkFibonacci = function (num) {
    if (num == 0) {
        return 0;
    }
    else if (num == 1) {
        return 1;
    }
    return checkFibonacci(num - 1) + checkFibonacci(num - 2);
};
var sums = 0;
var size = 3;
var arrr = [];
for (var i = 0; i < size; i++) {
    arrr.push(checkFibonacci(i));
    sums += checkFibonacci(i);
}
console.log("Dãy fibonacci: " + arrr);
console.log("Tổng " + size + " số fibonacci: " + sums);
