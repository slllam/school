// Lesson 13
class Student {
  constructor (name, age) {
    this.name = name;
    this.age = age;
    this.technologies = [];
    this.grade = "Junior";
  }  

  setTechnologies (technologies) {
    this.technologies = [...this.technologies, ...technologies];
  };
  setNewGrade(newGrade) {
    this.grade = newGrade;
  };
}
const student = new Student("Maxim", 20);

console.log(student);
student.setTechnologies(["HTML", "CSS", "JavaScript"]);
student.setNewGrade("Middle");
console.log(student);
