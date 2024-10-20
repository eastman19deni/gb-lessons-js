console.log('Задание 1')

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - this is zero`)
    }
    else if (i % 2 === 0) {
        console.log(`${i}- even number`)
    }
    else {
        console.log(`${i}- odd number`)
    }
}
console.log('-------------------------------------------------')
console.log('Задание 2')

let array1 = [1,2,3,4,5,6,7,8,9];

array1.splice(array1.indexOf(4), 1);
array1.splice(array1.indexOf(5), 1);

console.log(array1)
console.log('-------------------------------------------------')

console.log('Задание 3')

let array = []

for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 10))
}

let sum = array.reduce((acc, num) => acc + num, 0);

let min = Math.min(...array)

let haveThreeNum = array.includes(3)

console.log('Array ', array)
console.log('Sum elements ',sum)
console.log('Have three number ', haveThreeNum)
console.log('-------------------------------------------------')
console.log('Задание 4')

for(let i =1;i <= 20; i++){
    console.log('x'.repeat(i))
}
