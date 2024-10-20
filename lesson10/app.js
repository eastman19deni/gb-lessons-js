console.log('Задание 1')
let number = {
    slot1: 1,
    slot2: 2,
    slot3: 3,
    slot4: 4,
    slot5: 5,
    slot6: 6,
    slot7: 7,
}

for (let key in number) {
    if (number[key] >= 3) {
        console.log(number[key])
    }
}
console.log('-----------------------------')

console.log('Задание 2')

let post = {
    author: 'Deni',
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: 'Gula',
            text: 'lorem2',
            rating: {
                lokes: 10,
                dislakes: 2,
            },
        },
        {
            userId: 5,
            userName: 'Zhanel',
            text: 'lorem4 ',
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
}
console.log(post.author)
console.log(post.comments[0].rating.dislakes)
console.log(post.comments[1].userId)
console.log(post.comments[1].text)
console.log('--------------------------------------')

console.log('Задание 3')

let products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 500,
    },
    {
        id: 5,
        price: 700,
    },
]
products.forEach(product => {
    product.price *= 0.85;
})

console.log(products)

console.log('----------------------------------------')

console.log('Задание 4')

let product = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"],
    },
    {
        id: 5,
        price: 356,
        photos: [],
    }, {
        id: 7,
        price: 225,
        photos: ["3.jpg"],
    },
    {
        id: 9,
        price: 1,
    },
]

let wishPhotos = product.filter(product => product.photos && product.photos.length > 0)
console.log('wish photos: ', wishPhotos)
let sortProductPhotos = product.slice().sort((a,b) => a.price - b.price)
console.log('sorted product and photos: ', sortProductPhotos)

console.log("-------------------------------------------")

console.log('Задание 5')

let English = ["MOnday","Tree","Home","Low","Goofy"]
let Russian = ["Понедельник","Дерево","Дом","Низкий","Гуффи"]

const weekDays = {};
for (let i = 0;i <English.length; i++){
    weekDays[English[i]] = Russian[i]
}

console.log(weekDays)

console.log('----------------------')