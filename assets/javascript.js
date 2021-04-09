$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    var currentTime = parseInt(moment().format("H"));
});