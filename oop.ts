class Person {

    name : string;
    age  :number;

constructor(name:string,age:number){
    this.name = name;
    this.age = age;
    
   }

displayDetails(){
    console.log(`Name = $(this.name) , Age = $(this.age)`);
}
}
class Student extends Person{

    rollNo: string;
    constructor(name: string, age: number, rollNo: string){

        super(name,age);
        this.rollNo = rollNo;

    }
}
class Teacher extends Person{
    salary: number;
    constructor(name: string, age: number, salary: number){
        super(name,age)
        this.salary = salary;
    }
    
}
let p1 = new Person("babar",23);
let s1 = new Student("dani",22,"12345");
let t1 = new Teacher("daniyal",21,20000);
p1.displayDetails()
s1.displayDetails()
t1.displayDetails()

