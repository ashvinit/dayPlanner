//Display current date in the p tag with an id of currentDay
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

console.log(moment().format('hh'));

//variable for the military hour right now
var now = moment().format('HH');

var nowInt = parseInt(now);

$(".textarea").each(function() {
var hourDiv = $(this).siblings(".hour")

    var storedEntry = localStorage.getItem(hourDiv.text());
    $(this).val(storedEntry);
    console.log(storedEntry);

    var timeSlot = parseInt(hourDiv.data("hour"));
    console.log(timeSlot,nowInt);
        if (timeSlot > nowInt) {
            $(this).addClass("future");
        } else if (timeSlot < nowInt) {
            $(this).addClass("past");
        } else {
            $(this).addClass("present");
        }

});



console.log(typeof(nowInt));





$("button").on('click', function(event){

    event.preventDefault();

    var time = $(this).siblings('.hour').text();

    var entry = $(this).siblings('.textarea').val();

    console.log(time);
    console.log(entry);

    localStorage.setItem(time, entry);

});










