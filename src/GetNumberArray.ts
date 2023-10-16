export function getNumberArray(input: HTMLInputElement): number {
    const number1 = input.value;
    let sum = 0;
    const number2 = number1.split(',').map(num => Number(num)) // .map is taking each number in the array, assigning that number to the num argument/parameter, then turning it to a number, assigning it to an array, and then repeating that for each number - thanks copilot!
    for (let i = 0; i < number2.length; i++) {
        sum += number2[i];
      }
    return sum;
    
}