// Задание 1(является число натуральной степенью тройки)
const isPowerOfThree = (n) => {
    while (n % 3 === 0) {
        n /= 3;
    }
    if (n === 1) {
       return 'True';
    }
   else {
       return 'False';
   }    
}   
console.log (isPowerOfThree(2)); 
console.log (isPowerOfThree(9));
// Задание 2(является билет счастивым)
const isHappyTicket = (n) => {
   let stringLength = n.length; 
   if (stringLength % 2 === 0) {
       let leftResult = 0;
       for (let i = 0; i <= (stringLength / 2) - 1; i++) {
           leftResult += Number(String(n)[i]);
       }
       let rightResult = 0;
       for (let i = stringLength / 2; i <= stringLength - 1; i++) {
           rightResult += Number(n[i]);
       }
       if (leftResult === rightResult) {
           return 'True';
       }
       else {
           return 'False';
       }          
   }
   else {
       return "Erorr";
   }
}    
console.log (isHappyTicket('231002'));
console.log (isHappyTicket('99'));

// Задание 3(является число совершенным)
const isPerfectNumb = (n) => {
   if (n > 0) {
       let result = 0;
       for (let i = 1; i <= n - 1; i++) {
           if (n % i === 0) {
               result += i;
           }
       }
       if (result === n) {
           return 'True';
       }
       else {
           return 'False';
       }          
   }    
}
console.log (isPerfectNumb(6));      
console.log (isPerfectNumb(7));


// Задание 4(ф-я Аккермана)
const ackermann =  (m, n) => {
    if (m >= 0 && n >= 0 ) {
        while ( m != 0) {
            if ( m > 0 && n === 0) {
                return ackermann (m - 1, 1);
            }
            else if ( m > 0, n > 0) {
                return ackermann (m - 1, ackermann (m, n - 1));
            }
        }
        return n + 1;
    }
    else {
        return 'Erorr';
    }
}
console.log (ackermann(0, 0))
console.log (ackermann(2, 3))
console.log (ackermann(2, 1))