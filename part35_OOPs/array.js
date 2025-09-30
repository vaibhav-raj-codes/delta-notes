class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`${this.name} is talking`)
    }
}

class Student extends Person{
    constructor(name, age, gpa) {
        super(name, age);
        this.gpa = gpa;
    }
}

let harshad = new Student("harshad", 22, 6.9);
harshad.talk();