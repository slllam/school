// Lesson 12 

const stackList = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.JS'];

const student = {
  level: 1,
  stack: ['HTML'],
  improveLevel() {
    if (this.level > stackList.length - 1) {
      alert('Студент выучил все технологии!');
    }
    else {
      this.level += 1;
      const newStack = stackList[this.level - 1];
      this.stack.push(newStack);
    }
  return this; 
  }
}

student
  .improveLevel() // lvl 2
  .improveLevel() // lvl 3
  .improveLevel() // lvl 4
  .improveLevel() // lvl 5
  .improveLevel(); // lvl 6
  console.log(student);

