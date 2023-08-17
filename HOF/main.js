function fun(x,func){   //function fun(x(function fun(x(x = variable), func(func = Function)){
    console.log(x);
    console.log('inside fun')
    func();
    // console.log(func)
}

// function innerFun() {
//     console.log('Inside inner fun')
// }

// fun(87, innerFun);

// -----------OR----------------------------------------------------------------------------

fun(87,function() {
    console.log('Inside inner fun');
});


function fun1(){
    console.log('inside fun');
    function innerFun1(){
        console.log('innerFun');
    }
    return innerFun1;
}
const f = fun1();

f();