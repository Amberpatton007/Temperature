//Enter student information (name, grade101, grade102) and calculate and display the GPA

function getGPA(){
    //1) get the name, grade1 and grade2
    var studentName= prompt("enter student name");

    var grade1= Number(prompt("Enter grade1"));
    var grade2= Number(prompt("Enter grade 2"));

    var gpa= (grade1+grade2)/2;

    var studentList = document.getElementById("students");

    studentList.innerHTML+= `
    <p>Name: ${studentName}</p>
    <p>Grade 101: ${grade1}</p>
    <p>Frade 102: ${grade2}</p>
    <p>GPA: ${gpa}</p>
    `

}