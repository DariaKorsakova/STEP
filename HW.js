 // Задача 1
const calculateMax = (arr) => {
    let arrayLength = arr.length; 
    let maximum = arr[0] ;
    if (arrayLength === 0) {
        return null;
    }
    else {
        for (let i = 1; i < arrayLength; i++) {
            if (maximum < arr[i]) {
                maximum = arr[i];
            }
        }
        return maximum;   
    }
}
const array = [3, 2,-10, 38, 0];
console.log(calculateMax(array));

// Задача 2
const calculateSum = (arr) => {
    let arrayLength = arr.length; 
    let sum = 0;
    if (arrayLength === 0) {
        return 0;
    }
    else {
        for (let i = 0; i < arrayLength; i++) {
               sum += arr[i];
        }
        return sum;    
    }
}

console.log(calculateSum(array));

// Задача 3
const getTotalAmount = (money, value) => {
    let arrayLength = money.length; 
    let sum = 0;
    if (arrayLength === 0) {
        return 0;
    }
    else {
        if (value === 'usd') {
            for (let i = 0; i < arrayLength; i++) {
                if (money[i][0] === 'u' && money[i][1] === 's' && money[i][2] === 'd'){
                    sum += Number(money[i].slice(4));
                }
            }
             return sum;   
        }
        else if (value === 'rub') {
            for (let i = 0; i < arrayLength; i++) {
                if (money[i][0] === 'r' && money[i][1] === 'u' && money[i][2] === 'b'){
                    sum += Number(money[i].slice(4));
                }
            }
            return sum;   
        }
        else if (value === 'eur') {
            for (let i = 0; i < arrayLength; i++) {
                if (money[i][0] === 'e' && money[i][1] === 'u' && money[i][2] === 'r'){
                    sum += Number(money[i].slice(4));
                }
            }
            return sum;   
        }
        else {
            return 'Undifinded value'
        }
        
    }
}
const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
const money2 = [  
    'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
    ];
 const money3 = [
        'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
        ];
console.log(getTotalAmount(money1, 'usd'))
console.log(getTotalAmount(money2, 'eur'))
console.log(getTotalAmount(money3, 'rub'))


// Задача 4

const flatten = (arr) => {
    let arrayLength = arr.length; 
    let res = [];
    if (arrayLength === 0) {
        return [];
    }
    else {
        for (let i = 0; i < arrayLength; i++) {
            if (typeof arr[i] !== "object"){
                res.push(arr[i]);
            }
            else {
                res.push(...arr[i]);
            }
        }
        return res; 
    }  
}
console.log(flatten([1, [3, 2], 9]))
console.log(flatten([1, [[2], [3]], [9]]))