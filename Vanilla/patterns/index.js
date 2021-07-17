const patternDict = [{
    pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
    intent: 'Hello'
},
{
    pattern: 'like\\sin\\s\\b(?<city>.+)',
    intent: 'currentweather'
},
{
    pattern: '\\b(bye|exit)\\b',
    intent: 'Exit'
}];

module.exports = patternDict;
