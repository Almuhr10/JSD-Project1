json = (require('./data.js')); 

//Q1 Write a function to check if an array contains a particular number. 


function check(arr,n) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) 
    {
        return true;
    }  
}
return false;
}
arr = [1,2,3] ; 
console.log(check(arr,3));  

// //Q2 Write a function that takes two integers (hours, minutes) and converts them to seconds.

function convertToSeconds(hour, minutes) {
    return hour * 60 * 60 + minutes * 60;
}

console.log(convertToSeconds(12,15));

// Q3. Use the following data to solve the problems below.

var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
// 1 access the value of the capacityInGallons key.
console.log(aquarium.capacityInGallons);
// 2 add 2 rocks to the numberOfRocks in the aquarium.
aquarium.numberOfRocks += 2 ;
// 3 access the clown fish and print the object.
console.log(aquarium.fish[2].type, "\n", aquarium.fish[2]);
// 4 access the size of the puffer fish.
console.log(aquarium.fish[1].size);
// 5 your goldfish grew! Access the size key of goldfish and reassign it to '4 inches'.
aquarium.fish[0].size = '4 inches';
// 6 u bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.

//      1st way 
// let newAquarium = {        
//             type: 'starfish' ,
//             size: '5 inches' ,
//             color: 'blue'
// } ;
// aquarium.fish.push(newAquarium);
// console.log(aquarium.fish);

//      2nd way 
aquarium.fish.newFish = { type: 'starfish' , size: '5 inches' , color: 'blue' };
console.log(aquarium.fish);

// Write a function that console.logs each character object in the data.
var data = JSON.parse(json);

let logData = function () {
    console.log(data.people);
}
// logData();

// Write a function that console.logs each character's name
let logNames = function () {
    data.people.forEach(element => {
        console.log(element.name);
    });
};
// logNames();

// Write a function that console.logs each character's name and eye color
let logNameEyes = function () {
    data.people.forEach(element => {
        console.log(`name is : ${element.name} , eyes color is ${element.eye_color}`);
    });
};
// logNameEyes();

// Write a function that console.logs each character's name whose mass is greater than 75
let logByMass = function () {
    data.people.forEach(element => {
        if (element.mass > 75)
            console.log(element.name);
    });
};
logByMass();

// Write a function that takes in a parameter called num, and returns a random number between 0 and num. 
function getRandomNum(a){
    return Math.floor(Math.random() * Math.floor(a));
}
console.log(getRandomNum(6));

// A leap year has one day added to February for being synchronized with the seasonal year.
function isLeap(year) {
    return (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));
}

console.log(isLeap(2020));
console.log(isLeap(1800));
