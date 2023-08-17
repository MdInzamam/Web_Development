

function fun1(f){
    f()
}

function fun2(){
    console.log("Inner function 1")
}
fun1(fun2)

// -------------------or-----------------------------------------------------------------------------

fun1(function fun3(){
    console.log('Inner function 2');
})

// -------------------or-----------------------------------------------------------------------------------------

fun1(function fun4(){
    console.log('Inner function 3')
})

// ------------------map--------------------------------------------------------------------------------------------

const arr = [1,2,3,4,5,6];

function square(num){
    return num * num;
}
let sqr = arr.map(square)
console.log(arr);
console.log(sqr);

// -------------------Call Back Function-----------------------------------------------------------------------------------------
function sum(a,b){
    let addTwoNo = a + b;
    print(addTwoNo)
}
function print(total){
    console.log(total);
}

sum(5,5,print)