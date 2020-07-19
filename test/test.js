let {encode , decode } = require('../');

let fs = require('fs')



let text = fs.readFileSync(__dirname+'/I Have a Dream.txt')


fs.writeFileSync(__dirname+'/../I Have a Dream.png', encode(text.toString()))


console.log( decode(fs.readFileSync(__dirname+'/../I Have a Dream.png')) );
