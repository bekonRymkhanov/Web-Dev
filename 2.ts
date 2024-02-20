let a:number=5;
let b:number=3;
console.log(a+b);
function sum(a:number,b:number):number{
    return a+b;
}
console.log(sum(3,5));
// console.log(sum(4,"2"));

const user={
    name:"John",
    age:16
}
// console.log(user.gpa);

interface Runnable{
    speed:number;
    run();
}

class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

class Student extends Person implements Runnable{
    gpa:number;
    speed:10;
    constructor(name:string,age:number,gpa:number){
        super(name,age);
        this.gpa=gpa;
    }
    run(){
        //something
    }
}