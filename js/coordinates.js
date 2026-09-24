const myCounty = {
    name: "Ocean",
    state: "NJ",
    xmin: -74.553105,
    xmax: -73.965414,
    ymin: 39.475198,
    ymax: 40.172402,
    ymid: 39.8238,
}
console.log(myCounty)

function checkCoords() {
 // Read input values from the form (provided)
 let latInput = document.getElementById('lat-input').value;
 let lonInput = document.getElementById('lon-input').value;
 // STEP A: Convert strings to numbers using parseFloat()
 // Your code here:
 latInput = parseFloat(latInput);
 lonInput = parseFloat(lonInput);
 // STEP B: Validate — check that both values are actual numbers
 // Hint: isNaN() returns true if the value is not a number
 // If either input is invalid, set a helpful message and return early
 // Your code here:
 let result;
 if(isNaN(latInput) || isNaN(lonInput)) {
    result = "Please enter numbers for latitude and longitude.";
    document.getElementById("result").textContent = result;
    return result;
 }
 // STEP C: Check the boundaries using your myCounty object
 // Write an if/else that checks whether both coordinates fall
 // inside all four edges of your county. Use the && operator.
 // Declare a variable called result and assign your message inside each branch.
 // Your code here:
 if(lonInput >= myCounty.xmin && lonInput <= myCounty.xmax) {
    if(latInput >= myCounty.ymin && latInput <= myCounty.ymax) {
        result = "YES! Those coordinates are INSIDE Ocean County!";
    }
 }
 else if(latInput <= -90 || latInput >= 90) {
    result = "Please enter valid numbers for latitude and longitude.";
 }
 else if(lonInput <= -180 || lonInput >= 180) {
    result = "Please enter valid numbers for latitude and longitude.";
 }
 else {
    result = "NO. Those coordinates are OUTSIDE Ocean County.";
 }
 document.getElementById("result").textContent = result;
}

const checkBtn = document.querySelector("#check-btn");
const resultDiv = document.querySelector("#result");
checkBtn.addEventListener("click", () => {
   let latInput = document.getElementById('lat-input').value;
   let lonInput = document.getElementById('lon-input').value;
   
   latInput = parseFloat(latInput);
   lonInput = parseFloat(lonInput);

   let result;
    if(isNaN(latInput) || isNaN(lonInput)) {
     result = "Please enter numbers for latitude and longitude.";
     document.getElementById("result").textContent = result;
     return result;
   }

   if(lonInput >= myCounty.xmin && lonInput <= myCounty.xmax) {
    if(latInput >= myCounty.ymin && latInput <= myCounty.ymax) {
        result = "YES! Those coordinates are INSIDE Ocean County!";
        resultDiv.classList.add("result-inside");
        if(latInput >= myCounty.ymid) {
         result += " You're in the northern half of Ocean County";
        }
        else {
         result += " You're in the southern half of Ocean County";
        }
    }
   }
   else if(latInput <= -90 || latInput >= 90) {
    result = "Please enter valid numbers for latitude and longitude.";
    resultDiv.classList.add("result-wrong");
   }
   else if(lonInput <= -180 || lonInput >= 180) {
    result = "Please enter valid numbers for latitude and longitude.";
    resultDiv.classList.add("result-wrong");
   }
   else {
    result = "NO. Those coordinates are OUTSIDE Ocean County.";
    resultDiv.classList.add("result-outside");
   }
   document.getElementById("result").textContent = result;
})