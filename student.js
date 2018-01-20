class Person {
     constructor(name, quirkyFact, email) {
            this.name = name;
            this.quirkyFact = quirkyFact;
            this.email = email;
       }

     bio() {
        return `My name is ${this.name} and here is my quirky fact: ${this.quirkyFact}`;
     }

     snooze() {
        return `Time to sleep cuz ${this.quirkyFact}`;
     }
}

class Student extends Person {
      enroll(cohort) {
       this.cohort = cohort;
      }

      bio() {
         return `I am a student at Lighthouse Labs. ${super.bio()}`;
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

let student1 = new Student("May", "I am cool!", "may@gmail.com");
student1.enroll("Feb 2017");
console.log(student1);
console.log(student1.bio());
console.log(student1.snooze());

let Mentor1 = new Mentor("Anand", "I am awesome!", "anand@gmail.com");
Mentor1.goOnShift();
console.log(Mentor1);
console.log(Mentor1.bio());
console.log(Mentor1.snooze());
