//Display current date in the p tag with an id of currentDay
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

console.log(moment().format('hh'));

//variable for the military hour right now
var now = moment().format('HH');

//if var now is greater than the value of hour class
if (now > $('.hour').val()) {

    //add the class of past to the input tag
    $('input').addClass("past");

//else if var now is equal to the value of hour class  
} else if (now == $('hour').val()) {

    //add the class of present to the input tag
    $('input').addClass("present");

//if var now is less than the value of hour class
} else {

    //add the class of future to the input tag
    $('input').addClass("future");
};


