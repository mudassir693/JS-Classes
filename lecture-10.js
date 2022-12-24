//  functions

// let arr = ['Faraz','Hadia','Asma'];

// //  for => loop

// arr.forEach((each)=>{
//     console.log(each)
// })

// let stdFn = function(){
//     let arr = ['faraz','hadia','asma']
//     for(let eachStd=0;eachStd<arr.length;eachStd++){
//         if(arr[eachStd]=='hadia'){
//             return arr[eachStd]
//         }
//     }

//     return 'nothing'
// }

// console(stdFn())

// let fnVariable = stdFn()
// console.log(fnVariable)


// let arr = ['adasd','asda0','adsda']


// to get minimum number among all
let numbers = [5,7,3,2,7]

let min = function (num){
    let minNumber = num[0]

    for(let each=0;each<num.length;each++){
        if(minNumber>num[each]){
            minNumber = num[each]
        }
    }

    return minNumber
}

console.log(min(numbers))

let add = function(num1,num2){
    let addNumber = num1+num2
    return addNumber
}

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

let multiply = function(num1,num2){
    let multiply = num1*num2
    if((multiply>20)&&(multiply<30)){
        return multiply
    }
    return 'invalid'
}

console.log(multiply(3,2))