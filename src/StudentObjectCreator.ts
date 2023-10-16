import { Student } from './student.ts'

export function studentObjectCreator ( saveStudentTo:Student[], name:HTMLInputElement, grade:HTMLInputElement, button:HTMLButtonElement, result:HTMLDivElement) {

    button?.addEventListener('click', () => { 
        const studentName = name.value;
        const studentGrade = Number(grade.value);
        const student = new Student(studentName.toString(), studentGrade)
        saveStudentTo.push(student);
        result.innerHTML = `New Student Created. name = ${student.name} | grade = ${student.grade}`
    })
}