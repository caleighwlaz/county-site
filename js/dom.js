// ============================================
// PART 1: Selecting & Reading Elements
// ============================================
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

const station = {
    callsign: "WXVU",
    frequency: 89.1,
    city: "Villanova",
    sp: "PA",
    field_strength: 24.3,
    distance: 37.3,
    slogan: "89.1 The Roar",
    owner: "Caleigh Wlazlowski"
}

const heading = document.querySelector("h1");
console.log("Heading:", heading.textContent);

heading.textContent = `${heading.textContent} - Population: ${county.population}`;

const description = document.querySelector("#county-desc");
console.log("Heading:", description.textContent)

description.textContent = `${description.textContent} - Founded in ${county.founded}`;

const allParagraphs = document.querySelectorAll("p");
console.log("The number of paragrpahs is: ", allParagraphs.length);

for(const p of allParagraphs) {
    console.log(p.textContent)
}

// ============================================
// PART 2: REST API + JSON
// ============================================
const params = new URLSearchParams({
 lat: 39.693472, // your county seat latitude
 lon: -74.250229, // your county seat longitude (negative = West)
 callsign: "WXVU", // your chosen station
 request_type: 4,
 search_freq: "none", pi_code: "none",
 sig_strength: "null", startMiles: "none",
 miles: "null", format: "none",
 rxHeight: 10, measurementUnit: "feet"
});

const stationResult = document.querySelector("#station-result");
const stationDetail = document.querySelector("#station-detail")

// stationResult.textContent = `${stationResult.textContent} Callsign: ${station.callsign} - City: ${station.city}`;
stationResult.textContent = `${station.callsign} - ${station.frequency} FM - ${station.city} - ${station.sp}`;
stationDetail.textContent = `This station's field strength value is: ${station.field_strength}`;

// ============================================
// PART 4: Toggle & Events
// ============================================
const toggleBtn = document.querySelector("#toggle-btn");
const stationSection = document.querySelector("#station-section");
toggleBtn.addEventListener("click", () => {
 // YOUR CODE:
 // 1. Toggle the "hidden" class on stationSection
 stationSection.classList.toggle("hidden");
 // 2. If stationSection now has "hidden", set toggleBtn.textContent to "Show Station"
 if(stationSection.classList.contains("hidden")) {
    toggleBtn.textContent = "Show Station"
 }
 else {
    toggleBtn.textContent = "Hide Station"
 }
 // Otherwise set it to "Hide Station"
});

let isShown = false;
let imgElement = null;

const buttonLake = document.getElementById("btn-lake");
const lake = document.getElementById("lake");
buttonLake.addEventListener("click", () => {
   if(!isShown) {
      imgElement = document.createElement("manahawkin-lake");
      imgElement.src = 'img/manahawkin-lake.jpg';
      imgElement.alt = "Manahawkin Lake";

      lake.appendChild(imgElement);

      buttonLake.textContent = "Hide Photo";
      isShown = true;
   }
   else {
      imgElement.remove();
      imgElement = null;

      buttonLake.textContent = "Show Photo";
      isShown = false;
   }
})