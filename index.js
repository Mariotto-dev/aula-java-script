console.log("JavaScript Funcionando")

let firstName= 'Jose Maria'
let lastName= 'de Almeida'

console.log (firstName, lastName);

let age = 97;
age = 98;
console.log(age)

let itemName = 'ball';
let price = 40;
let itemAvailable = true;
let itemColor = 'Red';

console.log(itemName, price, itemAvailable, itemColor);

let ball = {
    itemName : 'ball',
    price: 40,
    itemAvailable : true,
    itemColor : 'Red',
}

ball.itemColor= 'Purple'
console.log(ball)
console.log(ball.itemName)

//Arrays
var cars =['Gol', 'Uno', 'Palio', 'Celta', 'Onix']
console.log(cars[0])
cars[1] = 'Fusion'
console.log(cars)

//functions
function saleStatus(status, total) {
    console.log('Transaction: \n ' + status + '! Total Amount R$' + total)
}

saleStatus('Approved', 2000.00)

function valueDiscont(discount, total){
    var final = total -total*(discount/100);
    return final
}
console.log('The value with discount is R$' + valueDiscont(15,2000.00))

//OPERADORES ARITIMÉTICOS

var num1 =1;
var num2 =2;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);
console.log(Math.sqrt(50));

//operadores de atribuição

var num3 = 10
console.log(num3 +=20);
console.log(num3 -=20);
console.log(num3 *=20);
console.log(num3 /=20);
console.log(num3 %=20);
console.log(num3 **=20);

var num4 = 20

console.log(num4>0);
console.log(num4<0);
console.log(num4>=10);
console.log(num4<=10);
console.log(num4!= 10);
console.log(num4==20);

//igualdade

var num5 = 1
var num6 = '1'

console.log(num5==num6)
console.log(num5===num6)

//operadores ternarios

var driver = 120
var speed = driver>110 ? 'Above':'Below'
console.log(speed);

//operadores lógicos

var temIdadeMinima = true
var temTituloEleitor = true

var podeVotar = temIdadeMinima && temTituloEleitor
console.log(podeVotar)

var podeViajar = !podeVotar
console.log(podeViajar)

//Operadores logicos com string

var corCliente = undefined
var corEstoque = 'black'
var corVendida = corCliente || corEstoque
console.log(corVendida)

//precedência de operadores

var num7 = (3 + 4) * 2
console.log(num7)

//if else

var driverSpeed = 101

if (driverSpeed>100) {
    console.log("Above Speed Limit")
}
else if (driverSpeed >=60 && driverSpeed <=100){
    console.log("Normally Speed Limit")

}

else {

    console.log("Below Speed limit")
}

var airPortName="GRU"

switch (airPortName){
    case 'MCO':
        console.log('Orlando International Airport')
        break
    case 'GRU':
        console.log('Sao Paulo International Airport')
        break
    case 'LAX':
        console.log('los Angeles International Airport')
        break
    case 'LAS':
        console.log('las Vegas International Airport')
        break
    default:
        console.log('Airport not Found')
        break
}

//for loop

for(i=1; i<=50; i++) {

    console.log('Objeto: ', i)
}

//while loop

// var index = 1
// while (index<=10){

//     console.log('Numero: ', index)
//     index++;
// }

//do while loop

var index = 1

do{

    console.log('Numero: ', index);
    index++;
}while (index<=10)

//for in loop

const myCar = {

    model: 'BMW',
    year: '2020',
    color: 'White',
    km: 68000
}

for(var key in myCar){

    console.log(key, myCar[key])
}

//for of loop

const friends=['João', 'Maria', 'José', 'Pedro']

for(var friend of friends){

    console.log(friends)
}

//oop

 var bookTitle = 'Atomic Rabits'
 var bookAuthor = 'Marioto Gabriel'
 var bookPages = '357'
 var bookPrice = '75.99'

//  const book = {

//     title: 'Atomic Rabits',
//     author: 'Marioto Gabriel',
//     pages: 357,
//     price: 75.99,
//     chapters: {

//         chapter1: 'The Beggin',
//         chapter2: 'What a Rabbit?',
//         chapter3: 'Wow, a Rabbit Foot',
//         chapter4: 'Atomic Rabbits in Fire',
//         chapter5: 'The bad good End'

//     },

//     printBook: function (){

//         console.log('Printing Book...')
//     }
//  }
//  book.printBook()

//  for (var chapter in book.chapters){
//     console.log(chapter, book.chapters[chapter])
    
//  }

 //factory functions

//  function createBook(title, author, pages, price) {

//     const book ={
//         title: title,
//         author: author,
//         pages: pages,
//         price: price,

//     printBook: function(){

//            console.log('Printing Book...')
//        }
//     }

//     return book
//  }

// const book1 = createBook('Atomic Rabbits', 'Marioto Gabriel', '357', '75.99')
// const book2 = createBook('An Adventure in Zimbabue', 'Marinoto Galilel', '302', '29.99')

// console.log(book1,book2)

//Constructor Function

// function CreateBook(title, author, pages, price){

//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.price = price

// }

// const book1 = new CreateBook('Atomic Rabbits','Marioto Gabriel', '357', '75.99')
// console.log(book1)

function CreateGame(title, author, price){

    this.title = title;
    this.author = author;
    this.price = price

}

const game1 = new CreateGame('Black Forces','Blackout Studios', '0.00')
console.log(game1)

//built-in objects
console.log(Math.max(1, 32, 2324, 42425425, 54646, 454))
console.log(Math.min(1, 32, 2324, 42425425, 54646, 454))
console.log(Math.round(34.2))
console.log(Math.PI)
console.log(Date())

//String

var message = "Heyy, Hello! Whats up?"
console.log(message.startsWith('Heyy'))
console.log(message.endsWith('up?'))
console.log(message.includes('Hello!'))

console.log(message.length)

var name = "Luiz"

const email = 'Hi'+ name + ',\n The meet is scheduled for 10 AM\n'
const email2 = `Hi ${name},
The meet is scheduled for 10 AM`
console.log(email, email2)

//entendendo arrays a fundo

const random = ['Marcos', 1, true]
console.log(random)

//add item array

var num = [7,8,9,10]
num.push(11)
num.unshift(1,2,3)
num.splice(3,0,4,5,6)

console.log(num)
//const last = num.pop()
// var last = num.pop()
// num.shift()
// num.spline(3,3)

//clean nan array

//num = []
//num.length=0
// num.splice(0, num.length)

//concatenando arrays

let letters = ['a','b','c']
all = num.concat(letters)
console.log(all)

half = all.slice(3, 5)
console.log(half)

//joining arrays
var clients = ['Jenival', 'merluza', 'teste']
console.log(clients)
var clientsJoin = clients.join(',')
console.log(clientsJoin)

//organizador
clients.sort()
console.log(clients)
clients.reverse()
console.log(clients)


//localizando itens dentro de uma array primitiva

// console.log(num.includes(21))

//Arrays de Referência

const movies=[

    {id:1, title: 'The Matrix', rating: 4.5},
    {id:2, title: 'The Godfather', rating: 5},
    {id:3, title: 'Mondongo 2', rating: 4.8}

]

console.log(movies.find(movies=> movies.title ==='The Matrix'))

//verificar elementos dentro de uam array

// const tempGrajau=[18, 20, 19, 18, 21, 24, 27]
// const tempPositive = tempGrajau.every(function(value){
//     return value>=0
// })

// console.log(tempPositive)

//filtrando elementos dentro de uam array

const tempGrajau=[18, 20, 19, 18, 21, 24, 27]
// const tempPositive = tempGrajau.filter(function(value){
//     return value>=0
// })

// console.log(tempPositive)

// const tempPositive = tempGrajau.filter(value=> value=>0)

// console.log(tempPositive)

const tempNegative = tempGrajau.filter(value=> value<0)

console.log(tempNegative)

//function declaration
//hoisting

movie()

function movie(){
    console.log('O filme é: ')
}

//function Expression

const car = function() {

    console.log("O carro é: ");
}

car();

const truck = car

truck();

//arguments Object

function priceValue(){
    var totalValue = 0;
    for(var value of arguments)
        totalValue += value
    return totalValue
}

console.log(priceValue(2, 3, 4, 5, 6))

function carLoan(loan, rate, years) {
    return (loan *(rate/100) * years) + loan
}

console.log(carLoan(20000, 21.5, 5))