let name = "Babar Azam";
let runs = 4200;
let balls = 3600;
let matches = 95;

function strikeRate(runs, balls)
 {
    return (runs * 100) / balls;
}

function averageRuns(runs, matches) 
{
    return runs / matches;
}
console.log("CRICKET PLAYER PROFILE");

console.log(`Player Name : ${name}`);
console.log(`Total Runs : ${runs}`);
console.log(`Balls Faced : ${balls}`);
console.log(`Matches Played : ${matches}`);

console.log(`Strike Rate           : ${strikeRate(runs, balls)}`);
console.log(`Average Runs/Match    : ${averageRuns(runs, matches)}`);
