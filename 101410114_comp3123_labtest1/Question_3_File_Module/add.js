const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logDirectory = path.join(__dirname, 'Logs');

// Create log files and directory
const createLogs = () => {
    // Create a Log directory
    if (!fs.existsSync(logDirectory)) {
        fs.mkdirSync(logDirectory);
        console.log('Logs directory created.');
    }

    // Change current working directory to the Logs directory
    process.chdir(logDirectory);

    // Create 10 log files and write some text inside
    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);
        // Output file name
        console.log(fileName);
    }
};

// Call the createLogs function
createLogs();