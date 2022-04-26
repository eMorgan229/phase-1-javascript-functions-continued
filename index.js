// code your solution here
function saturdayFun(activity) {
     if (activity === undefined) {
        return "This Saturday, I want to roller-skate!";
    }
    else if (activity = "bathe my dog") {
        return `This Saturday, I want to ${activity}!`;
    }
    
}

function mondayWork(activity) {
    if (activity === undefined) {
        return `This Monday, I will go to the office.`;
    }
    else if (activity = "work from home.") {
        return `This Monday, I will ${activity}`;
    }
}
/* It should return a function
This "inner" function should:
take a single parameter that should default to "special". Name it however you wish.

return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
It should take as parameter a String that will be used to create visual flair
You may call the parameter whatever you like, but its default value should be "*"
Call example: const encouragingPromptFunction = wrapAdjective("!!!")
*/
function wrapAdjective(flair ="*"){
    return function(word = "special"){
        return `You are ${flair}${word}${flair}!`
    };

};

/*function wrapAdjective(adjective, highlight) {
    const encouragingPromptFunction () = SOMETHING
    const adjective = "special";
    return function () {
        const part2 = `*You are ${special}*`;
        return function () 
            
        };
    };
    
    const encouragingPromptFunction = wrapAdjective('!!!')
}

*/