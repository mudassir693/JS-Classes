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

let female = (arr)=>{
    let resArr = []
    arr.forEach((each)=>{
        if(each.Gender=="Female"){
            resArr.push(each)
        }
    })
    return resArr
}

let test2 = female(peoples)

console.log(test2)
