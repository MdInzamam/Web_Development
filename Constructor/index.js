
 
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// const p1 = new Person("Kartik", 24);

// const p2 = new Person("Naman", 26)



// //Global Object
 
// function fun(){
//     this.name = "Kartik"
//     console.log(this)
//     console.log(this.name)
//     console.log(this.origin)
// }
// fun()


const information = {
    name : "Ariba",
    age : 17,
    Detail : "New Delhi",
    email : "rishariba21@gmail.com"

}

 

//Implicit Binding

const user = {
    name : "naman",
    age : 25,

    print : function(){
        console.log(this)
        console.log(this.name)
    }
}
user.print();


//Explicit Binding
user.print.call(information)

const f1 = user.print.bind(information)

f1()