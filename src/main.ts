import { average } from './average.ts'
import { stringLength } from './stringLength.ts'
import { oddOrEven } from './OddOrEven.ts';
import { getNumberArray } from './GetNumberArray.ts';
import { Student } from './student.ts';
import { studentObjectCreator } from './StudentObjectCreator.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- add some html to the #app element in index.html -->
  
 `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

var inputValue = document.querySelector<HTMLInputElement>('#inputField')!;
var button = document.getElementById('average');
var result = document.querySelector<HTMLDivElement>('#result')!;

button?.addEventListener('click', () => {
  let value = stringLength(inputValue).toString();
  result.innerHTML = `String Entered is ${value} Characters Long`;
});


oddOrEven(document.querySelector<HTMLInputElement>('#numberInput')!, document.getElementById('numberAverage') as HTMLButtonElement, document.querySelector<HTMLDivElement>('#numberResult')!);


var inputValueNA = document.querySelector<HTMLInputElement>('#numberArrayInput')!;
var buttonNA = document.getElementById('numberArrayButton');
var resultNA = document.querySelector<HTMLDivElement>('#numberArrayDiv')!;

buttonNA?.addEventListener('click', () => {
  let valueNA = getNumberArray(inputValueNA);
  if (!isNaN(valueNA)) {
    resultNA.innerHTML = `Sum of Number Array is ${valueNA}`;
  } else if (isNaN(valueNA)) {
    resultNA.innerHTML = `Value entered is not in array format.`;
  } else {
    resultNA.innerHTML = `uhhhh, try again`;
  }
})

const student1 = new Student('bob', 9);

student1.yearsTillCollege();

let students: Student[] = []

studentObjectCreator(students, document.querySelector<HTMLInputElement>('#nameSOC')!, document.querySelector<HTMLInputElement>('#gradeSOC')!, document.getElementById('buttonSOC') as HTMLButtonElement, document.querySelector<HTMLDivElement>('#divSOC')!)

var clstudents = document.querySelector<HTMLButtonElement>('#clstudents')!;

clstudents.addEventListener('click', () => {
  console.log(students);
})