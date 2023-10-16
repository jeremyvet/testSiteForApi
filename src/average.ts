export function average (numbers: number[], element: HTMLDivElement, button: HTMLButtonElement) { 
    
    const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
    const numberOfNumbers = numbers.length;

    const getAverage = () => {
        const averageOfNumbers = sumOfNumbers / numberOfNumbers;
        element.innerHTML = `Average of given numbers are ${averageOfNumbers}`
    }

    button.addEventListener('click', () => getAverage);
    // getAverage();
}