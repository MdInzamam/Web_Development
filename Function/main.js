
//function defination


function fun(){
    console.log("Hello function")
}

function add(x,y,z){

    // console.log(x+y+z);
    return x + y + z;
}

function sub(x,y,z=2){
    console.log(x-y-z);
    // return x -y -z;
}



//funcation call 


fun();

// add(3 ,5, 2)
const ans = add(2,5,3);
console.log(ans);

sub=(4,8);
const subAns = (4,8);
console.log(subAns)


// functional Expression


const f = function fun(){
    console.log('inside fun');
}

// console.log(f);
f();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             Anonymous function as function expression

const  anonymousFun= function(){
    console.log('Anonymous function');
}

// console.log(fun);
anonymousFun(); //funtion can not decration before function initialisation


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//              Normal function question

var x = 100;
function func(){
    var y = 99;
    console.log('inside function');
    console.log(y);
}
console.log(x);

func();


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//              Normal function question

console.log(a);
b();
function b(){
    var c = 87;
    console.log(c);
}
var a = 100;



// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//              Normal function question

console.log(a1);
function b1(){
    c();            //
                    // this is laxical enviroment 
    var d = 999;    //
    
    function c(){
        console.log(d);
    }
}
b1();
var a1 = 100;

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                 Arrow Function

let fun1 = () => console.log("this is arrow function");

fun1()

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                       or

let fun2 = a => console.log(a*a);

fun2(5)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                       or

let fun3 = (a,b) => a+b;

console.log(fun3(3,5));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                    