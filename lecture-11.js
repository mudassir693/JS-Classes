// for

let arr = [1,2,4,3,5]


// for(let counter=0;counter<arr.length; counter++){
//     console.log(arr[counter])
// }

// let students = ['Faraz','Asma','Hadia']

// students.forEach((option)=>{
//     // option say kr k dikhao yeh sawal.
//     if(option=="Hadia"){
//         console.log(option)
//     }
// })
console.log(new Date('3-may-2006'))

let peoples = [
    {
        Name:"Hadia",
        SurName:'Siddiqui',
        FatherName:"Arshad Mahmood",
        Email:"hadia@gmail.com",
        Class:"13th",
        Age:17,
        Address:'Gulshan-E-Iqbal, Karachi',
        Gender:"Female",
        DBirth:new Date('3-may-2006'),
    },
    {
        Name:"Faraz",
        SurName:'Khan',
        FatherName:"Tariq Phoppah",
        Email:"faraz@gmail.com",
        Class:"15th",
        Age:22,
        Address:'Malir, Karachi',
        Gender:"Male",
        DBirth:new Date('9-dec-1999'),
    },
    {
        Name:"Asma",
        SurName:'Rafiq',
        FatherName:"Rafiq Uncle",
        Email:"asma@gmail.com",
        Class:"16th",
        Age:23,
        Address:'Johar, Karachi',
        Gender:"Female",
        DBirth:new Date('9-dec-2001'),
    }
]


// arr[0]
// objectName.key

//push => array k last m

// let maturePeople = (arrayName)=>{
//     let resultPeople = []
//     arrayName.forEach((individual)=>{
//         if(individual.Age>=18){
//             resultPeople.push(individual)
//         }
//     })
//     return resultPeople
// }

// let test = maturePeople(peoples)

// console.log(test)

// let female = (arr)=>{
//     let resArr = []
//     arr.forEach((each)=>{
//         if(each.Gender=="Female"){
//             resArr.push(each)
//         }
//     })
//     return resArr
// }

// 2-filter
let female2 = (arrr)=>{
    return arrr.filter((each)=>each.Gender=='Female')
}
let filteredArr = peoples.filter((each)=>each.Gender=='Female')


console.log(filteredArr)
// find
let findPeople = (arr, personName)=>{
    if(!arr || !personName){
        return 'please provide valid perameters'
    }
    return arr.find((each)=>each.Name == personName)
}

// every
function isAllFemale(arr){
    return arr.every((individual) => individual.Gender == 'Female')
}

// some
function isFemaleExist(arr){
    return arr.some((individual) => individual.Gender == 'Female')
}

// indexOfconst 
beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

// let test2 = indeOfFn(peoples,'Faraz')

// console.log(test2)



let = practice = []

// pop => remove from end
// push => insert at the end => 
// shift => remove from start
// unshift => insert at start

practice.push('faraz')
practice.push('mudassir')
practice.push('hadia')
practice.pop()
practice.push('hadia')
practice.shift()
practice.unshift('mubashir')



// sort

let numbers = [4,7,4,2,1,0]
numbers.sort((a,b)=>b-a) // descending
console.log(numbers)
numbers.sort((a,b)=>a-b) // ascending
console.log(numbers)

numbers.slice(1,5)
console.log(numbers.slice(1,5))

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial)

//todo list
eachObj = {
    Title:'',
    Completed:false
}

let todos = [] 