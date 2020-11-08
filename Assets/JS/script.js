//Display current date in the p tag with an id of currentDay
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

console.log(moment().format('hh'));

//variable for the military hour right now
var now = moment().format('HH');

//if statement to change class of hour
if (now > $('.hour').val()) {

    $('input').addClass("past");
 
} else if (now == $('hour').val()) {

    $('input').addClass("present");

} else {

    $('input').addClass("future");

};


$("button").on('click', function(event){

    event.preventDefault();

    var time = $(this).siblings('.hour').text();

    var entry = $(this).siblings('#textarea').val();

    console.log(time);
    console.log(entry);

    localStorage.setItem(time, entry);

});











