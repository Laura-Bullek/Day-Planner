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
var dateEl = document.getElementById("currentDay");
var schedule = document.querySelector("container")

// Making the dates using Moment.js
var date1 = moment().format('dddd');
var date2 = moment().format('MMM Do');
date = date1 + " " + date2;
dateEl.innerHTML = date;

var hour = moment().format('H');

