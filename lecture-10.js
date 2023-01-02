//  functions

let arr = ['Faraz','Hadia','Asma'];

// //  for => loop

// arr.forEach((each)=>{
//     console.log(each)
// })

let stdFn = function(){
    let arr = ['faraz','hadia','asma']
    for(let eachStd=0;eachStd<arr.length;eachStd++){
        if(arr[eachStd]=='hadia'){
            return arr[eachStd]
        }
    }

    return 'nothing'
}

console.log('stdFn: ',stdFn())

// let fnVariable = stdFn()
// console.log(fnVariable)


// let arr = ['adasd','asda0','adsda']


// to get minimum number among all
let numbers = [5,7,3,2,7]
let anotherNumber = [2,4,1]

let min = function (num){
    let minNumber = num[0]  // 5

    for(let each=0;each<num.length;each++){  // 0, 1, 2, 3, 4
        if(minNumber>num[each]){ // 5>5, 5>7, 5>3, 3>2, 2>7
            minNumber = num[each] //  3, 2
        }
    }

    return minNumber // 2
}

// console.log(min('anotherNumber'))

let add = function(num1,num2){
    /// ! => opposite "!false" => true, "!true" => false
    if(num1==null || num2==null){
        return 'kindly provide all perameters'
    }
    return  num1+num2
}

console.log(add(5))

let addAll = function(arr){
    let result=0
    for(let each=0;each<arr.length;each++){
        result = add(result,arr[each])
    }

    return result
}

let subtract = function(num1,num2){
    let subtract = num1 - num2
    if(subtract>=0){
        return subtract
    }
    return 'invalid'
}

// let multiply = function(num1,num2){
//     let multiply = num1*num2
//     if((multiply>20)&&(multiply<30)){
//         return multiply
//     }
//     return 'invalid'
// }

// arrow functions

// let multiply = (num1,num2)=>{
//     let multiply = num1*num2
//     if((multiply>20)&&(multiply<30)){
//         return multiply
//     }
//     return 'invalid'
// }

function multiply(){
    let multiply = num1*num2
    if((multiply>20)&&(multiply<30)){
        return multiply
    }
    return 'invalid'
}
console.log(multiply(3,2))

