'use strict';

const { Console } = require('console');
const Readline = require('readline'); //read input stream
const rl = Readline.createInterface({
    input: process.stdin,
    output:process.stdout,
    terminal:false
});

const matcher = require('./matcher');


rl.setPrompt('> ');
rl.prompt();
rl.on('line' , reply=>{
    matcher(reply, data =>{
        switch(data.intent){
            case 'Hello':
                console.log("A Big Hello from Vanilla");
                rl.prompt();
                break;
            case 'Exit' :
                console.log("Have a great day");
                process.exit(0);
                break;
            default:{
                console.log("Sorry, I don't know that");
                rl.prompt();  
            }
                 
        }
    });
    
});