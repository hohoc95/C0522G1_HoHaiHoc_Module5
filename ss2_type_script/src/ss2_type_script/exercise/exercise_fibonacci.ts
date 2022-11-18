
let fibonacci = function (num: number): number {
    if (num == 0) {
        return 0;
    }
    else if (num == 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

let sums: number = 0;
let size: number = 3;
let arrr: Array <number> = [];
for (let i = 0; i < size; i++) {
    arrr.push(fibonacci(i))
    sums += fibonacci(i);
}

console.log("Dãy fibonacci: " + arrr);
console.log("Tổng " + size + " số fibonacci: " + sums);