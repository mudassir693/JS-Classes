let employee = {
    name: "Faraz",
    age: 22,
    address: "abc road, Karachi",
    salary: 12000,
    cnic: "1231-342357-12"
};

let person = {
    name: "Mudassir",
    age: 21,
    contactInfo: '0318.....'
};

let car = {
    color: "red",
    model: 2012,
    numberPlate: "kab123",
    engineNo: ""
};

let laptop = {
    model: '',
    company: '',
    color: ''
};

let blog = {
    name: "Something",
    writer: "AnyOne"
};

let girl = {
    name: 'Areeba',
    age: 12,
    address: 'anywhere',
    phoneNumber: 'xxx-xx'
};

let anotherGirl = Object.assign({}, girl);
anotherGirl.name = "Another Name";

console.log(girl.address);
console.log(anotherGirl.name);

let a = 12;
let b = a;
a = 4;
console.log('a:', a);
console.log('b:', b);

let personCopy = person;
personCopy.name = "Updated Mudassir";
console.log('person name:', person.name); 
console.log('personCopy name:', personCopy.name);
