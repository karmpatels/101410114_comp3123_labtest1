// Function to filter non-strings and convert strings to lowercase
const lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
        // Check if input is an array
        if (!Array.isArray(array)) {
            return reject(new Error("Input is not an array"));
        }

        // Filter out non-strings and convert strings to lowercase
        const lowerCased = array
            .filter(item => typeof item === 'string')  // Keep only strings
            .map(item => item.toLowerCase());          // Convert to lowercase

        resolve(lowerCased);
    });
};

// Example input
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// Calling functions
lowerCaseWords(mixedArray)
    .then(result => console.log(result))   // Output: ['pizza', 'wings']
    .catch(error => console.error(error.message));