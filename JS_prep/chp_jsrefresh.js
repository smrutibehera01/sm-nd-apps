// difference between let const var

// Understanding variable let const var (var is outdated)!!
// var employeeName = 'Smruti Ranjan'
// var companyName = 'KPMG Gobal services' 
// var companyLocation ='Bangalore 2'

let employeeName = 'Smruti Ranjan'
let companyName = 'KPMG Gobal services' 
let companyLocation ='Bangalore 2'

// const employeeName = 'Smruti Ranjan'
// const companyName = 'KPMG Gobal services' 
// const companyLocation ='Bangalore 2'

// This is an Normal use case function used for JS concept
 function summnaryEmployeeFn(employeeName, companyName , companyLocation){
    return ('My Name is ' + employeeName + ' ' +  'Woking in' + ' ' + companyName + ' ' + 'Based out of' + ' ' + companyLocation);
}
console.log(summnaryEmployeeFn(employeeName, companyName , companyLocation));


// This ia an anonymous function with 2 variant
 var summnaryEmployee = function(employeeName, companyName , companyLocation){
    return ('My Name is ' + employeeName + ' ' +  'Woking in' + ' ' + companyName + ' ' + 'Based out of' + ' ' + companyLocation);
}
console.log(summnaryEmployee(employeeName, companyName , companyLocation));

// Arrow function
const summnaryEmployeeOne = (employeeName, companyName , companyLocation) => {
    return ('My Name is ' + employeeName + ' ' +  'Woking in' + ' ' + companyName + ' ' + 'Based out of' + ' ' + companyLocation);
}
console.log(summnaryEmployeeOne(employeeName, companyName , companyLocation));

// one more example  (These are the arrow function with writing type of diffrent symtax more info next to chekcout- es6 cconcept website)

const productItem = (itemOne, ItemTwo) => {
    return itemOne + ' ' + ItemTwo;
}
console.log(productItem('Web', 'Mobile'))

// shortFrom Need to used when extrem Requied where most short from used
const productItemOne = (itemOne, ItemTwo) =>  itemOne + ' ' + ItemTwo;
console.log(productItemOne('Webs', 'Mobile'))

// New chp-2 JS objects (For this Keyword check JS reference Video Note Arrow function will not work in %this keyword%)
// variant -1
var carObject = {
    model : 'BMW-X7',
    Brand : 'BWM',
    color: 'off-White',
    price : '79 Lakh'
}
console.log(carObject);

// variant -2
var carObjectOne = {
    model : 'BMW-X7',
    Brand : 'BWM',
    color: 'off-White',
    price : '79 Lakh',
    fullDetails:function(){
        return('show me the complete Details' + this.model + this.Brand + this.color + this.price);
    }

}
//console.log(carObjectOne);
carObjectOne.fullDetails();

// variant -3
var carObjectTwo = {
    model : 'BMW-X7',
    Brand : 'BWM',
    color: 'off-White',
    price : '79 Lakh',
    fullDetails(){
        return('show me the complete Details' + this.model + this.Brand + this.color + this.price);
    }
}
//console.log(carObjectTwo);
console.log(carObjectTwo.fullDetails());

// New chp -3 Array of object , Array of Array methods short Hand loop wirtiting

const cars = ['BMW' , 'Mercedes benz', 'Audi', 'bentley'];
// One Way
for(let brand of cars){
    console.log(brand)
}
// Es6 Method of Array
console.log(cars.map(brand => 'Print The Brand Name of Cars :: ' +' '+ brand))
console.log(cars);

//Arrays, Objects, and Reference Types : Both array & object are the reference Type
cars.push('Rolls royce')
console.log(cars)

//Understanding Spread and Rest Operators

// Most Improtant Part Async Code and Promises

const fetchApiData = callback =>{
    setTimeout (() => {
        callback('Fetch API Data Done!!');
    },2000)
}

setTimeout (() =>{
    console.log('Delay the Excute for 3 sec')
},3000)

console.log('No Delay 1')
console.log('No Delay 2')

fetchApiData ( text =>{
    console.log(text)
})

//Promise
