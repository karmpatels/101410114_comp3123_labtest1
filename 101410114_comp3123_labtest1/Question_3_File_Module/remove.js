const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logDirectory = path.join(__dirname, 'Logs');

// Remove log files and directory
const removeLogs = () => {
    // Check if Logs directory exists
    if (fs.existsSync(logDirectory)) {
        // Read all files in the Logs directory
        fs.readdirSync(logDirectory).forEach((file) => {
            // Output file name before deletion
            console.log(`delete files...${file}`);
            // Delete each file
            fs.unlinkSync(path.join(logDirectory, file));
        });

        // Remove the Logs directory after all files are deleted
        fs.rmdirSync(logDirectory);
        console.log('Logs directory removed.');
    } else {
        console.log('No Logs directory found.');
    }
};

// Call the removeLogs function
removeLogs();