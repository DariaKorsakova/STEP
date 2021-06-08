// const course = {
//     name: "Arina",
//     age: '18',
// };

// for (const prop in course) {
//     console.log(`course.${prop} = ${course[prop]}`);
// };

// const keys = Object.keys(course);
// console.log(keys);

// for (const key of keys) {
//     console.log(course[key]);
// }

// const value = Object.values(course);
// console.log(value);


// const entries = Object.entries(course);
// console.log(entries);


// реализовать функцию, которая возвращает список ключей объекта, значение которых равно переданному значению:

// findKeys(lessonMembers, 10); // ['foreach', 'operations']
// findKeys(lessonMembers, 3); // ['syntax']

const lessonMembers = {
    syntax: 3,
    using: 2,
    foreach: 10,
    operations: 10,
    destructing: 2,
    array: 2,
};

const findKeys = (obj, expectedVal) => {
    const result = [];
    const entries = Object.entries(obj);
    for (const [key, value] of entries){
        if (value === expectedVal) {
            result.push(key);
        }
    }
    return result;    
};

console.log(findKeys(lessonMembers, 10));