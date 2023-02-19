// console.log('hello')

// var n1 = 5
// var n2 = 8

// var result = n1 + n2;
// console.log(' ~l file: main.js:7 ~ result', result)
// console.warn('')


      
// var result = console.log("hello");
// console.log(result);             // ==> undefined
// console.log(console.log(true));  // ==> undefined

// var x = 0;
// if (console.log(33)) {
//     x = 99;
// }
// console.log(x);   // ==> 0

// תרגיל מספר 1

var n1 = 5
var n2 = 6

if (n1 < n2) {
    console.log("boom")
}

else {
    console.log("try again")
}

var n1 = 8
var n2 = 6

if (n1 < n2) {
    console.log("boom")
}

else {
    console.log("try again")
}


// תרגיל מספר 2  .
 
var num1 = 2
var num2 = 2
    console.log(num1+num2)

 // 3 תרגיל מספר 
   
var num1 = 5
var num2 = 5
    console.log(num1*num2)

//4תרגיל מספר 

var day = 7

if (day === 1){
    console.log("good week")
}

else if (day === 2 || day === 3 || day === 4 ){
    console.log("good day")
}

else if (day === 5 || day === 6 || day === 7 ){
    console.log("happy weekend!")
}



// 5 תרגיל מספר 

var day = 1

if (day === 1){
    console.log("good month")
}

else if (day === 2<=9){
    console.log("start work")
}

else if (day === 10){
    console.log("get salary")
}

else if (day === 11<=19 ){
    console.log("BE HAPPY")
}

else if (day === 20<=30){
    console.log("the end")
}

else if (day === 31 ){
    console.log("boom boom")
}

// 6 תרגיל מספר 

var n1 = 'passover'

if (n1 === 'purim'){
    console.log("happy purim")
}

else if (n1 === 'passover' ){
    console.log("clear home")
}

else if (n1 === 'shavoout' ){
    console.log("eat milk")
}

else if (n1 === 'suckot' ){
    console.log("build sucka")
}

// 7 תרגיל מספר 

player1_name = 'shlomi'

player2_name = 'ishay'

player1_score = 60;

player2_score = 90;

console.log(player2_name + ' ' + player2_score )

// 8 תרגיל מספר 

var n1 = 2

 console.log( n1 % 2 === 0 )

// 9 תרגיל מספר 


var n1 = 8 
var n2 = 10

console.log((n1>n2 ? n1 : n2)) 


// 10 תרגיל מספר

var n1 = 5

var n2 = 9

var n3 = 58

var n4 = 54

var n5 = 51

var n6 = 52

var n7 = 55

console.log((n1+n2+n3+n4+n5+n6+n7)/ 7 )


// 11 תרגיל מספר 

var person_name = "Jimmy"
var person_age = 22
var person_km = 14

if(person_age>= 30 && person_age <= 50){
    if(person_km>30){
        console.log("In great shape" +" " +person_name+ " " + person_age)
    }
    else if (person_km > 10){
        console.log("In good shape"+" " +person_name+ " " + person_age)
    }else{
        console.log("Room for improvement"+" " +person_name+ " " + person_age)
    }
}
if(person_age >=18 && person_age < 30){
    console.log((person_km >= 25 ? 
    ("In great shape" +" " +person_name+ " " + person_age) 
    : 
    ("Room for improvement"+" " +person_name+ " " + person_age)))
}

// 12 תרגיל מספר

var hour = 9
if(hour >= 5 && hour <= 11){
    console.log("Good morning")
}
if(hour >= 12 && hour <=17){
    console.log("Good noon")
}
if(hour >= 18 && hour <= 23){
    console.log("Good evening")
}