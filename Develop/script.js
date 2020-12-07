//target and set current date
var currentDateDisplay = $("#currentDayContain");
var dateTimeCode = moment()
currentDateDisplay.text(moment())

console.log(moment().hours())
console.log($("#hour9").text().substring(0,2))

//Color rows past,present,future
if (moment().hours() > $("#hour9").text().substring(0,2)) {
    $("#row9").css("background-color","red")
} else {

}

//Save button click functionality
//prompt to add event name for selcted hour blockS
//add to local storage
//display saved events on refresh

//onclick local.storage - set key and value
 