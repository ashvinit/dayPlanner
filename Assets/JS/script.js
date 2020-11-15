//Display current date in the p tag with an id of currentDay
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

//variable for the military hour right now
var now = moment().format('HH');

//changed var now from string to int
var nowInt = parseInt(now);

//function to change the color of each timeblock according to the time of day
$(".textarea").each(function() {
var hourDiv = $(this).siblings(".hour")

    //retrieve stored entries from local storage and print them out as if else statement runs
    var storedEntry = localStorage.getItem(hourDiv.text());
    $(this).val(storedEntry);

    //if else statement to color the timeblocks
    var timeSlot = parseInt(hourDiv.data("hour"));
        if (timeSlot > nowInt) {
            $(this).addClass("future");
        } else if (timeSlot < nowInt) {
            $(this).addClass("past");
        } else {
            $(this).addClass("present");
        }

});

//event listener forthe save button to store the time and textarea entry
$("button").on('click', function(event){

    event.preventDefault();

    var time = $(this).siblings('.hour').text();

    var entry = $(this).siblings('.textarea').val();

    localStorage.setItem(time, entry);

});