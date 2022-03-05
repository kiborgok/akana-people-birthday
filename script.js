//Akan names object
let akanNames = {
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

//Function to return Akan name based on day and objectNames passed

let getAkanName = (objectNames, day) => {
  //Get gender value on select
  let selectElement = document.getElementById("gender");
  let genderValue = selectElement.options[selectElement.selectedIndex].value;
    if (genderValue == "none") {
        return "none"
    };
  if (genderValue == "male") {
    //If genderValue is male loop through male array and return index === day
    for (let i = 0; i < objectNames.male.length; i++) {
      if (parseInt(day) === i) {
        return objectNames.male[i];
      }
    }
  }
  //If genderValue is female loop through female array and return index === day
  for (let i = 0; i < objectNames.female.length; i++) {
    if (parseInt(day) === i) {
      return objectNames.female[i];
    }
  }
};

//Function to generate akanName from birthday and display the name
let generateAkanName = e => {
    e.preventDefault()
    let date = document.getElementById("date").value;
    if (!date) return alert("Please provide a date");
    let birthday = new Date(date);
    let akanNameValue = getAkanName(akanNames, birthday.getDay());
    if (akanNameValue === "none") {
        alert("Please select a gender")
        return
    }
    if (date && akanNameValue !== "none") {
        let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        for (let i = 0; i < daysOfTheWeek.length; i++){
            if (birthday.getDay() === i) {
                document.getElementById("akan-name").textContent = `Born on ${daysOfTheWeek[i]} your Akan name is ${akanNameValue}`;
                document.getElementById("akan-name").style.backgroundColor = "red"
                //Clear form inputs after submit
                document.querySelector("#gender").value = "none";
                document.querySelector("#date").value = "";
            }
        }
    }
    
}

//Query submit button and add a 'click' event listener

let submit = document.querySelector("#submit");
submit.addEventListener('click', generateAkanName)