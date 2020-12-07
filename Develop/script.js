//target and set current date
var currentDateDisplay = $("#currentDayContain");
var dateTimeCode = moment()
currentDateDisplay.text(moment())

//target container section of Jumbo for cal block
var calGrid = $(".container");
console.log(moment().hours())

//Color rows past,present,future
var hours = $(".hour").text()
var hoursFormat = hours.toString().substring(0,2)

console.log(hours)
console.log(hoursFormat)


if (moment().hours()<=$(".hour")) {
    $(".hour").closest(".row").css("background-color","red")
}

//Save button click functionality
//prompt to add event name for selcted hour block
//add to local storage
//display saved events on refresh

//onclick local.storage - set key and value
 