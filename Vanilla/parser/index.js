'use strict';
let getFeel = temp =>{
    if(temp<5) return "shivering cold";
    else if(temp>=5 && temp<15) return "pretty cold";
    else if(temp>=15 && temp<25) return "moderately cold";
    else if(temp>=23 && temp<32) return "quite warm";
    else if(temp>=32 && temp<40) return "very hot";
    else return "super hot";

}
let currentweather= response =>{
    if(response.query.results){
        let resp= response.query.results.channel;
        let location= `${resp.location.city}, ${resp.location.country}`;
        //Access conditions
        let{text, temp} = resp.item.condition;

        return `Right now, it is ${text.toLowerCase().red.bold} in ${location.bold}. It is ${getFeel(Number(temp))} at ${temp.red.bold} degree celsius.`
    }
    
}

module.exports = {currentweather};