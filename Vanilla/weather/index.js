'use strict';
const YQL = require('yql');

let getweather = (location, type= 'forecast') => {
    return new Promise((resolve, reject)=>{
        let query = new YQL(`select ${type === 'current'? 'item.condition, location' : '*'} from weather.forecast where would in (select woeid from geo.places(1) where text="${location}" and u="c"`);
    
        query.exec((error, response) => {

        
            if(error){
                reject(error);
            }else{
                resolve(response);
            }
        });
    
    });
}

module.exports= getweather;