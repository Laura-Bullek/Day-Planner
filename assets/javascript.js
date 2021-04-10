// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// - Using moment.js to display the date
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// - How many timeblocks should it have?
// - What standard business hours should be on there? 8-5, nine hour minimum?
// - What's the maxiumum look like for when new events are added?// - 
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// - What do those colors look like?
// WHEN I click into a timeblock
// THEN I can enter an event
// - Leaving open for text content 
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// - What happens the next day or later in the hours after the events persist?

// Link elements to the DOM
let dateEl = document.getElementById("currentDay");
let schedule = document.querySelector("container");
let nineAm = document.getElementById("9");
let tenAm = document.getElementById("10");
let elevenAm = document.getElementById("11");
let twelvePm = document.getElementById("12");
let onePm = document.getElementById("13");
let twoPm = document.getElementById("14");
let threePm = document.getElementById("15");
let fourPm = document.getElementById("16");
let fivePm = document.getElementById("17oclock");

// Making the dates using Moment.js
let date1 = moment().format('dddd');
let date2 = moment().format('MMM Do');
date = date1 + " " + date2;
dateEl.innerHTML = date;

let hour = moment().format('H');

var block = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm];

// Checks timeblocks to see if they're in the past, present, or future
for (i = 0; i < 9; i++) {
    let currentTime = i + 9;
    let currentBlock = block[i];

if (currentTime < hour) {
    currentBlock.classList.add("past");
} else if (currentTime == hour) {
    currentBlock.classList.add("present");
} else (currentTime > hour); {
    currentBlock.classList.add("future");
}

// Links to the DOM for textcontent in timeblocks
let nineBtnEl = document.getElementById("9amBtn");
let tenBtnEl = document.getElementById("10amBtn");
let elevenBtnEl = document.getElementById("11amBtn");
let twelveBtnEl = document.getElementById("12pmBtn");
let oneBtnEl = document.getElementById("1pmBtn");
let twoBtnEl = document.getElementById("2pmBtn");
let threeBtnEl = document.getElementById("3pmBtn");
let fourBtnEl = document.getElementById("4pmBtn");
let fiveBtnEl = document.getElementById("5pmBtn");

// Saves the timeblock events to local storage
nineBtnEl.addEventListener("click",function() {
    let nineInput = document.getElementById("9input").value;
    localStorage.setItem("9amEvent", nineInput);  
});

tenBtnEl.addEventListener("click",function() {
    let tenInput = document.getElementById("10input").value;
    localStorage.setItem("10amEvent", tenInput);
});

elevenBtnEl.addEventListener("click",function() {
    let elevenInput = document.getElementById("11input").value;
    localStorage.setItem("11amEvent", elevenInput);
});

twelveBtnEl.addEventListener("click",function() {
    let twelveInput = document.getElementById("12input").value;
    localStorage.setItem("12pmEvent", twelveInput);
});

oneBtnEl.addEventListener("click",function() {
    let oneInput = document.getElementById("1input").value;
    localStorage.setItem("1pmEvent", oneInput);
});

twoBtnEl.addEventListener("click",function() {
    let twoInput = document.getElementById("2input").value;
    localStorage.setItem("2pmEvent", twoInput);
});

threeBtnEl.addEventListener("click",function() {
    let threeInput = document.getElementById("3input").value;
    localStorage.setItem("3pmEvent", threeInput);
});

fourBtnEl.addEventListener("click",function() {
    let fourInput = document.getElementById("4input").value;
    localStorage.setItem("4pmEvent", fourInput);
});
    
fiveBtnEl.addEventListener("click",function() {
    let fiveInput = document.getElementById("5input").value;
    localStorage.setItem("5pmEvent", fiveInput); 
});

// Pulls the saved events and displays them when the page is loaded
let events = [];

events[0] = localStorage.getItem("9amEvent");
events[1] = localStorage.getItem("10amEvent");
events[2] = localStorage.getItem("11amEvent");
events[3] = localStorage.getItem("12pmEvent");
events[4] = localStorage.getItem("1pmEvent");
events[5] = localStorage.getItem("2pmEvent");
events[6] = localStorage.getItem("3pmEvent");
events[7] = localStorage.getItem("4pmEvent");
events[8] = localStorage.getItem("5pmEvent");

for(i=0; i < Events.length; i++) {
      console.log(Events[i]);

    if (Events[i] !== null) {
        let setTime = i + "txt";
        let savedEvent = Events[i];
        console.log(savedEvent)

        console.log(("."+ setTime))
        let eventTxt = document.getElementsByClassName(setTime);
        console.log(eventTxt[0])

        let plans = eventTxt[0];

        plans.value = savedEvent;
    }
}}