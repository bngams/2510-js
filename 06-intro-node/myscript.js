// Common JS Syntax
// const { writeFile } = require('fs'); // or node:fs

// native node module
// ES module syntax
import { writeFile } from 'fs'; 

// local module
// import { uppercaseString } from './myModule';
import strUtils from './myModule.js';

// 3rd party module
// npm install moment
import moment from 'moment';

writeFile('message.txt', 
    strUtils.uppercaseString('Hello Node.js at ' + moment().format('MMMM Do YYYY, h:mm:ss a')), 'utf8', (err) => {
        if (err) throw err;
        console.log('File has been saved!');
});
