class Person {
     constructor(name, quirkyFact) {
            this.name = name;
            this.quirkyFact = quirkyFact;
       }

     bio() {
        return `My name is ${this.name} and here is my quirky fact: ${this.quirkyFact}`;
     }
}

class Student extends Person {
      enroll(cohort) {
       this.cohort = cohort;
      }
}

class Mentor extends Person {
      goOnShift() {
        this.onShift = true;
      }
 
      goOffShift() {
        this.onShift = false;
      }
}

let student1 = new Student("May", "I am cool!");
student1.enroll("Feb 2017");
console.log(student1);

let Mentor1 = new Mentor("Anand", "I am awesome!");
Mentor1.goOnShift();
console.log(Mentor1);
