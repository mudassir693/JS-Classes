//  functions

// let arr = ['Faraz','Hadia','Asma'];

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

// console(stdFn())

let fnVariable = stdFn()
console.log(fnVariable)


// let arr = ['adasd','asda0','adsda']


