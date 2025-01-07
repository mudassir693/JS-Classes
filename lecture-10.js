let students = ['Faraz', 'Hadia', 'Asma'];

let getStudent = function() {
    let studentList = ['Faraz', 'Hadia', 'Asma'];
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i] === 'Hadia') {
            return studentList[i];
        }
    }
    return 'Student not found';
}

console.log('getStudent: ', getStudent());

let numbers = [5, 7, 3, 2, 7];
let additionalNumbers = [2, 4, 1];

let findMinNumber = function(nums) {
    let minNum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (minNum > nums[i]) {
            minNum = nums[i];
        }
    }

    return minNum;
}

console.log('Min Number: ', findMinNumber(numbers));

let addNumbers = function(num1, num2) {
    if (num1 === null || num2 === null) {
        return 'Please provide both parameters';
    }
    return num1 + num2;
}

console.log(addNumbers(5, 10));

let addAllNumbers = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = addNumbers(total, arr[i]);
    }
    return total;
}

let subtractNumbers = function(num1, num2) {
    let result = num1 - num2;
    if (result >= 0) {
        return result;
    }
    return 'Invalid subtraction';
}

console.log(subtractNumbers(10, 5));

let multiplyNumbers = function(num1, num2) {
    let product = num1 * num2;
    if (product > 20 && product < 30) {
        return product;
    }
    return 'Product not in valid range';
}

console.log(multiplyNumbers(5, 5));

let calculateTotal = function(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum = addNumbers(totalSum, arr[i]);
    }
    return totalSum;
}
