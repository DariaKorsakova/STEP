
'use strickt'
// // Задание 1(является число натуральной степенью тройки)
// const isPowerOfThree = (n) => {
//     while (n % 3 === 0) {
//         n /= 3;
//     }
//     if (n === 1) {
//        return 'True';
//     }
//    else {
//        return 'False';
//    }    
// }   
// console.log (isPowerOfThree(2)); 
// console.log (isPowerOfThree(9));
// // Задание 2(является билет счастивым)
// const isHappyTicket = (n) => {
//    let stringLength = n.length; 
//    if (stringLength % 2 === 0) {
//        let leftResult = 0;
//        for (let i = 0; i <= (stringLength / 2) - 1; i++) {
//            leftResult += Number(String(n)[i]);
//        }
//        let rightResult = 0;
//        for (let i = stringLength / 2; i <= stringLength - 1; i++) {
//            rightResult += Number(n[i]);
//        }
//        if (leftResult === rightResult) {
//            return 'True';
//        }
//        else {
//            return 'False';
//        }          
//    }
//    else {
//        return "Erorr";
//    }
// }    
// console.log (isHappyTicket('231002'));
// console.log (isHappyTicket('99'));

// // Задание 3(является число совершенным)
// const isPerfectNumb = (n) => {
//    if (n > 0) {
//        let result = 0;
//        for (let i = 1; i <= n - 1; i++) {
//            if (n % i === 0) {
//                result += i;
//            }
//        }
//        if (result === n) {
//            return 'True';
//        }
//        else {
//            return 'False';
//        }          
//    }    
// }
// console.log (isPerfectNumb(6));      
// console.log (isPerfectNumb(7));


// // Задание 4(ф-я Аккермана)
// const ackermann =  (m, n) => {
//     if (m >= 0 && n >= 0 ) {
//         while ( m != 0) {
//             if ( m > 0 && n === 0) {
//                 return ackermann (m - 1, 1);
//             }
//             else if ( m > 0, n > 0) {
//                 return ackermann (m - 1, ackermann (m, n - 1));
//             }
//         }
//         return n + 1;
//     }
//     else {
//         return 'Erorr';
//     }
// }
// console.log (ackermann(0, 0))
// console.log (ackermann(2, 3))
// console.log (ackermann(2, 1))


// Область видимости- как интерпритатор в разных местах кода видит разные штуки

// лексическая область видимости-сам м-м поиска значений: смотрим в текущей области, если нет, то идет на уровень выше.

// const ags = 29; //глобальное

// const multiplier = (num) => {
//     const x = 10; // локальное
//     return num * x;
// };

// let resut = true; 



// // лексическая область - область видимости люб компонента определяется местом расположения...

// let a = 7;
// let b = 10;

// const multiplier = () => {
//     let a = 5;
//     return a * b;
// };



// // замыкания- ф-я, кот запомнила(замкнула) в себе какую-то информацию, используемую внутри

// const f = () => {
//     return 0;
// }

// const createPrinter = () => {
//     const name = "King";

//     const printName = () => {
//         console.log(name);
//     }
//     return printName;
// }

// const myPrinter = createPrinter(); 
// myPrinter();
// // ф-я кот была возвращена из createPrinter-замыкание

// const x = 7;
// const f = (x) => () => () => x;
// console.log(f(10)()());


// const convertDNAToRNA = (DNA) => {
//     let RNA = '';
//     let stringLength = DNA.length; 
//     if (stringLength === 0) {
//         return " ";
//     }
//     else {
//         for (let i = 0; i <= stringLength - 1; i++) {
//             if (DNA[i] === "A") {
//                 RNA += "U";
//             }
//             else if (DNA[i] === "T") {
//                 RNA += "A";
//             }
//             else if (DNA[i] === "G") {
//                 RNA += "C";
//             }
//             else if (DNA[i] === "C") {
//                 RNA += "G";
//             }
//             else {
//                 return null;
//             }
//         };
//         return RNA;
//     }   
// };   

// console.log(convertDNAToRNA('TTTGCC'));


// Массивы - коллекции элементов. задача-представить такие коллекции в виде единой структуры которая позволяет рабоатть с ними как с единым целым

// const items = [];
// const animals = ['birds', 'cats', 'dogs'];
// console.log(animals.length);
// animals.push("goa") // add element at the end
// animals.pop() //delete last element
// console.log(animals)
// animals.unshift("goa") // add at the begining
// animals[1] = 'horses'; //change 1 element to horses
// console.log(animals);


// const userNames = ['vasya', 'roma', 'petya'];
// for (let i = 0; i < userNames.length; i++) {
//     console.log(userNames[i]);
// }

// for (let i of userNames) {
//     console.log(i);
// }

// const emails = ['VASYA@GMAIL.COM', 'IGOR@YANDEX.RU'];

// for (let i = 0; i < emails.length; i++) {
//     const email = emails[i];
//     const normalizedEmail = email.toLowerCase();
//     emails[i] = normalizedEmail;
// }
// console.log(emails);

// // Ссылки. let, const -хранят примитивн и сслыочн данные. 1)числа,строки,булен. 2) объекты

// const items = [1, 2];
// // ссылаемся на 1 и тот же массив
// const items2 = items;
// items.push(3);





// const changeElementsInArray = (arr) => {
//     let arrayLength = arr.length; 
//     if (arrayLength < 2) {
//         return arr;
//     }
//     else {
//         const newArr = [arr[arrayLength - 1]];
//         for (let i = 1; i < arrayLength - 1; i++) {
//             newArr[i] = arr[i];
//         }
//         newArr[newArr.length] = arr[0];
//         return newArr;
//     }   
// };   

// console.log(changeElementsInArray([1, 2, 5, 6, 7]));

// const items = [3, 8, 1];
// items.sort();
// items.reverse();
// console.log(items);


// const addPrefix = (arr, x) => {
//     let arrayLength = arr.length; 
//     const newArr = [];
//     for (let i = 0; i < arrayLength; i++) {
//         // newName = x + " " + arr[i]
//         newName =  `${x}  ${arr[i]}`
//         newArr[i] = newName;
//     }
//     return  newArr;
// };   
// const names = ['john', 'smith', 'karl'];
// let prefix = "Mr"
// console.log(addPrefix(names, prefix));

// const sumElements = (arr) => {
//     let arrayLength = arr.length; 
//     let sum = 0;
//     if (arrayLength === 0) {
//         return 0;
//     }
//     else {
//         for (let i = 0; i < arrayLength; i++) {
//             if (arr[i] % 3 === 0) {
//                sum += arr[i];
//             }
//         }
//         return sum;
        
//     }
// }
// const names = [8, 9, 21, 19, 18, 22, 7];
// const names2 = [2, 0, 17, 3, 9, 15, 4];
// console.log(sumElements(names));
// console.log(sumElements(names2));

const names = [8, 9, 21, null, 18, 22, null];
const compact = (coll) => {
    const result = [];
    for (const item of coll) {
        if (item !== null) {
            result.push(item)
        }
    }
    return result;
};
console.log(compact(names))


// генерация строк методом join

const output = names.join("\n");
console.log(output)
