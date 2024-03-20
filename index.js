function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
    }
    console.log(saturdayFun());
    saturdayFun('bathe my dog');
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
    }
    console.log(mondayWork());
function wrapAdjective(symbol) {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    }
}
let wrapStar = wrapAdjective('*');
let emphaticStar = wrapStar("a hard worker");
console.log(emphaticStar);
let wrapPipe = wrapAdjective("||");
let emphaticPipe = wrapPipe("a dedicated programmer");
console.log(emphaticPipe); 