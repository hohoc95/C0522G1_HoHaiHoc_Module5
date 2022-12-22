var fibonacci = function (num) {
    if (num == 0) {
        return 0;
    }
    else if (num == 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
};
var sums = 0;
var size = 3;
var arrr = [];
for (var i = 0; i < size; i++) {
    arrr.push(fibonacci(i));
    sums += fibonacci(i);
}
console.log("Dãy fibonacci: " + arrr);
console.log("Tổng " + size + " số fibonacci: " + sums);
