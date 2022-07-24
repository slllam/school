// Lesson 10

const student = {
    fullName: "Максим",
    experienceInMonths: 12,
    stack: ["HTML", "CSS", "JavaScript", "React"]
  };

function giveJobToStudent(student, jobName){
    const studentWithJob = {
        ...student,
        jobName: jobName
    }
return studentWithJob;    
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
alert (`Поздравляем! У студента ${updatedStudent.fullName} появилась новая работа! Теперь он ${updatedStudent.jobName}`);
