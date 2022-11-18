
let checkFibonacci = function (num: number): number {
    if (num == 0) {
        return 0;
    }

    else if (num == 1) {
        return 1;
    }

    return checkFibonacci(num - 1) + checkFibonacci(num - 2);
}

let sums: number = 0;
let size: number = 3;
let arrr: Array<number> = [];
for (let i = 0; i < size; i++) {
    arrr.push(checkFibonacci(i))
    sums += checkFibonacci(i);
}

console.log("Dãy fibonacci: " + arrr);
console.log("Tổng " + size + " số fibonacci: " + sums);