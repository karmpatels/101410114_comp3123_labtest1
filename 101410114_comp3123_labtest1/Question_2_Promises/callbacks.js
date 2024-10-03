// delayedSuccess function as Given
const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        console.log(success);
    }, 500);
};

// delayedException function as Given
const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500);
};

// resolvedPromise function as Asked
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 'message': 'resolved success after 500ms!' });
        }, 500);
    });
};

// rejectedPromise function as Asked
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('rejected after 500ms with an error!'));
        }, 500);
    });
};

// Calling the Given callback functions
delayedSuccess();
delayedException();

// Calling the promise-based functions
resolvedPromise()
    .then((result) => console.log(result))    // Expected output: { message: 'resolved success after 500ms!' }
    .catch((error) => console.error(error));

rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message));    // Expected output: 'rejected after 500ms with an error!'