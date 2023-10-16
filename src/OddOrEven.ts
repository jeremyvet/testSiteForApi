export function oddOrEven (input: HTMLInputElement, button: HTMLButtonElement, result:HTMLDivElement) {
    
    
    const determineNumber = () => {
        var inputNumber = parseInt(input.value);
        if(inputNumber % 2 == 0) {
            return result.innerHTML = `${inputNumber} is Even`;
        } else {
            return result.innerHTML = `${inputNumber} is Odd`;
        }
    }

    button.addEventListener('click', determineNumber);
}