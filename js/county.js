const countyName = "Ocean";
const state = "NJ";
let population = 646434;
let countySeat = "Toms River";

console.log("County name: " + countyName)
console.log("State:", state);
console.log("Population:", population);
console.log("County Seat:", countySeat);

function classifyCounty(pop) {
    if(pop > 500000)
        return "large"
    else if(pop > 100000)
        return "medium"
    else
        return "small"
}

population = 700000;
console.log("Updated population: " + population)

const county = {
 name: "Ocean", // county name
 state: "NJ", // state
 population: 646434, // current population
 seat: "Toms River", // county seat
 founded: 1850, // year founded
 areaSqMi: 914.84, // area in square miles
 myTown: "Manahawkin", // your hometown

 largestMunicipality: {
    name: "Lakewood Township",
    population: 135158,
 }
};
console.log(county)
console.log("My county is " + county.name)
console.log("It's a big county! " + county.areaSqMi + " people")
console.log("The population of Ocean County's largest municipality is: " + county.largestMunicipality.population)

let userChoice = prompt(
 "What would you like to know about " + county.name + "?\n"
 + "1. Population\n"
 + "2. County Seat\n"
 + "3. Year Founded"
);

if(userChoice === "1")
    alert(county.population)
else if(userChoice === "2")
    alert(county.seat)
else if(userChoice === "3")
    alert(county.founded)
else
    alert("WRONG CHOICE!")

console.log(classifyCounty(county.largestMunicipality.population))
console.log(classifyCounty(700000))

for (let i = 1; i <= 5; i++) {
 let message = "County #" + i;
 var lastCount = i;
 console.log(message);
}
console.log(lastCount); // add this AFTER the closing }
//console.log(message); // add this AFTER the closing }

let originalPop = county.population
let copiedPop = originalPop
copiedPop = 832
console.log("Original: ", originalPop)
console.log("Copy: ", copiedPop)

console.log("Ocean County's population: ", county.population)
let countyRef = county
countyRef.population = 1
console.log("Ocean County's population after changing the referenced object: ", county.population)
console.log("Ref pop: ", countyRef.population)

console.log("We have connected our JavaScript to our website!")