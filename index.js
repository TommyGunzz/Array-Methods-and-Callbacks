// import { fifaData } from 'fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function hometeam(data){ 
    let newData =  data.filter(function(data) {
        return data.Year === 2014 && data.Stage === "Final" ;
        });
            console.log(newData[0]["Home Team Name"]);
            console.log(newData[0]["Away Team Name"]);
            console.log(newData[0]["Home Team Goals"]);
            console.log(newData[0]["Away Team Goals"]);
    if (newData[0]["Home Team Goals"] > newData[0]["Away Team Goals"]){
         console.log(newData[0]["Home Team Name"])}
          else if (newData[0]["Home Team Goals"] < newData[0]["Away Team Goals"]) {
            console.log(newData[0]["Away Team Name"])
          } else { console.log(newData[0]["Win conditions"])
        };
    };

hometeam(fifaData);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */


function getFinals(data) {
    let finals= data.filter(finalsData => finalsData.Stage === "Final");
    return finals;  
    };
console.log(getFinals(fifaData));

     /* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals){
    let years =[]; 
   getFinals.map(function(data) { 
   years.push(data.Year)
})
    return years;
};
console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals){ 
    let winners = [];
     getFinals.map(function(data) { 
      
         if (data["Home Team Goals"] > data["Away Team Goals"]) {
          winners.push(data["Home Team Name"])}
           else if (data["Home Team Goals"] < data["Away Team Goals"] ) {
          winners.push(data["Away Team Name"])};
      });
     return winners;
           };
 console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(years, getWinners) {
    const winners = getWinners.map((country, index)=>{
        return `In ${years[index]}, ${country} won the world cup`;
    })
    return winners;
};
/*console.log(getYears(fifaData, getFinals).length === getWinners(fifaData, getFinals).length);*/

console.log(getWinnersByYear(getYears(getFinals(fifaData)), getWinners(getFinals(fifaData))));


/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
// notes
//const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
// arrAvg([20, 10, 5, 10]) -> 11.25
// ------------

function getAverageGoals(data) {
    let arrHome = data.reduce(function(accumulator, item){
        return accumulator + item["Home Team Goals"]
    }, 0);
    let arrAway = data.reduce(function(accumulator, item){
        return accumulator + item["Away Team Goals"]
    }, 0);
    
    return { 
        "Home average":(arrHome / data.length).toFixed(2),
        "Away average":(arrAway / data.length).toFixed(2)
    };
    };

    console.log(getAverageGoals(fifaData));

    
/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
  
