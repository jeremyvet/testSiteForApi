export function addNumberArray(input: HTMLInputElement): number[] {
    const number1 = input.value;
    const numbers = number1.split(',').map(num => Number(num)) // .map is taking each number in the array, assigning that number to the num argument/parameter, then turning it to a number, assigning it to an array, and then repeating that for each number - thanks copilot!
    return numbers;
}