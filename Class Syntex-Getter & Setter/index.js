

class car{
    constructor(name,price,color,isdiskBrack){
    
    this.name = name;
    this.price = price;
    this.color = color;
    this.isdiskBrack = isdiskBrack;

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
    constructor(name,price,color,isdiskBrack, maxSpeed, engine, weight){
    super(name,price,color,isdiskBrack)
        // this.name = name;
        // this.price = price;
        // this.color = color
        // this.isdiskBrack = isdiskBrack
        this.engine = engine;
        this.maxSpeed = maxSpeed;
        this.weight = weight;
    }

    getcarname(){
        super.getcarname();
        console.log(this.name);
    }
}

const c1 = new car("BMW", "$1000", "blue", true)

const r1 = new racingCar("ferrari", "$4000", "blue", true, "V8", "500kg")

console.log(c1)
