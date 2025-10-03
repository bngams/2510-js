import { writeFile } from 'fs'; // ES module syntax

writeFile('message.txt', 'Hello Node.js', 'utf8', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});