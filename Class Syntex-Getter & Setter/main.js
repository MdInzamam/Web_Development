// Inharetance


let confrigation = {
    name : "bmw",
    price : "$1800",
    color : "red",
    isdiskBrack : true
}

class car{
    constructor(confrigation){
    
    this.name = confrigation.name;
    this.price = confrigation.price;
    this.color = confrigation.color;
    this.isdiskBrack = confrigation.isdiskBrack;

    }
    getcarname(){
    console.log(`the name o ouer car name:${this.name}`)   
    }


    //getter function
    get getprice(){
        return this.price
    }

    //setter function
    set setprice(newPrice){
        if(newPrice <= 0){
            this.price = 0;
        }
        else{
            this.price = newPrice
        }
    }

    //static function

    static printfun(){
        console.log("this is a static function working on the car class")
    }

}


//  inharetance

class racingCar extends car {
    constructor(confrigation,maxSpeed,engine,weight){
    super(confrigation)
        this.engine = engine;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    getcarname(){
        super.getcarname();
        console.log(this.name);
    }
}

const c1 = new car(confrigation)

const r1 = new racingCar(confrigation, "400", "V8", "500kg")

console.log(c1)
