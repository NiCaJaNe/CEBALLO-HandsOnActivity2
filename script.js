function addNumbers(a, b) {
    return a + b;
}

function getValidInput(promptText) {
    let userInput;

    do {
        userInput = prompt(promptText);

        if (userInput === null) {
            return null; 
        }

        const trimmedInput = userInput.trim();
        const numberRegex = /^-?(\d+(\.\d*)?|\.\d+)$/; 

        if (!numberRegex.test(trimmedInput)) {
            alert("Invalid input. Please enter a valid number.");
        } else {
            return parseFloat(trimmedInput);
        }

    } while (true);
}

function promptAndAdd() {
    try {
        const firstValue = getValidInput("Enter the first number:");
        if (firstValue === null) return; 

        const secondValue = getValidInput("Enter the second number:");
        if (secondValue === null) return; 

        const total = addNumbers(firstValue, secondValue);
        alert(`The sum is: ${total}`);
        console.log(`Sum: ${total}`);
    } catch (error) {
        console.error(error.message);
    }
}

console.log(addNumbers(5, 10)); // Output: 15
