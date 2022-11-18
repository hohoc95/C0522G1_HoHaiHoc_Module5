// console.log("hello world");

function isPrime(number: number):boolean {
    let isPrime = true;
    if (number < 2){
        isPrime = true;
    } else if(number > 2){
        for (let  i = 2; i <= Math.sqrt(number); i++){
            if(number % i == 0){
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

let arr:Array<number> = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];

let sum = 0;

for (let number of arr){
    if(isPrime(number)){
        sum += number;
        console.log("Số nguyên tố: " + number);
    }
}
console.log("Tổng: " + sum);

