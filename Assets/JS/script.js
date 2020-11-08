//Display current date in the p tag with an id of currentDay
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

console.log(moment().format('hh'));

//variable for the military hour right now
var now = moment().format('HH');

var nowInt = parseInt(now);

var timeslot = $('.hour').val();

var timeslotInt = parseInt(timeslot);




console.log(typeof(timeslotInt));
console.log(typeof(nowInt));





$("button").on('click', function(event){

    event.preventDefault();

    var time = $(this).siblings('.hour').text();

    var entry = $(this).siblings('#textarea').val();

    console.log(time);
    console.log(entry);

    localStorage.setItem(time, entry);

 
});

function saveText () {

}











