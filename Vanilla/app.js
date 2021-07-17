'use strict';

const { Console } = require('console');
const Readline = require('readline'); //read input stream


const rl = Readline.createInterface({
    input: process.stdin,
    output:process.stdout,
    terminal:false
});

const matcher = require('./matcher');
const weather= require('./weather');
const {currentweather} = require('./parser');

rl.setPrompt('> ');
rl.prompt();
rl.on('line' , reply=>{
    matcher(reply, data =>{
        switch(data.intent){
            case 'Hello':
                console.log(`${data.entities.greeting} to you too`);
                rl.prompt();
                break;
            case 'currentweather':
                console.log(`Let me check...`);
                //get weather from API
                weather(data.entities.city,'current')
                    .then(repsonse =>{
                        let parseResult=currentweather(repsonse);
                        console.log(repsonse);
                        rl.prompt();
                    })
                    .catch(error =>{
                        console.log("There seems to be a problem connecting to the weather service");
                        rl.prompt();
                    })
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