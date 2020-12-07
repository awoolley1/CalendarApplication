//target and set current date
var currentDateDisplay = $("#currentDayContain");
var dateTimeCode = moment()
currentDateDisplay.text(moment())


//Color rows past,present,future
if (moment().hours() > $("#hour9").text().substring(0,2)) {
    $("#row9").css("background-color","grey").css("opacity", 0.5)
} else if (moment().hours() == $("#hour9").text().substring(0,2)) {
    $("#row9").css("background-color","green").css("opacity", 0.5)
} else {
    $("#row9").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour10").text().substring(0,2)) {
    $("#row10").css("background-color","grey").css("opacity", 0.5)
} else if (moment().hours() == $("#hour10").text().substring(0,2)) {
    $("#row10").css("background-color","green").css("opacity", 0.5)
} else {
    $("#row10").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour11").text().substring(0,2)) {
    $("#row11").css("background-color","grey").css("opacity", 0.5)
} else if (moment().hours() == $("#hour11").text().substring(0,2)) {
    $("#row11").css("background-color","green").css("opacity", 0.5)
} else {
    $("#row11").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour12").text().substring(0,2)) {
    $("#row12").css("background-color","grey").css("opacity", 0.5)
} else if (moment().hours() == $("#hour12").text().substring(0,2)) {
    $("#row12").css("background-color","green").css("opacity", 0.5)
} else {
    $("#row12").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour13").text().substring(0,2)) {
    $("#row13").css("background-color","grey").css("opacity", 0.5)
} else if (moment().hours() == $("#hour13").text().substring(0,2)) {
    $("#row13").css("background-color","green").css("opacity", 0.9)
} else {
    $("#row13").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour14").text().substring(0,2)) {
    $("#row14").css("background-color","grey").css("opacity", 0.5)
} else if (moment().hours() == $("#hour14").text().substring(0,2)) {
    $("#row14").css("background-color","green").css("opacity", 0.9)
} else {
    $("#row14").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour15").text().substring(0,2)) {
    $("#row15").css("background-color","grey").css("opacity", 0.5)
} else if (moment().hours() == $("#hour15").text().substring(0,2)) {
    $("#row15").css("background-color","green").css("opacity", 0.9)
} else {
    $("#row15").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour16").text().substring(0,2)) {
    $("#row16").css("background-color","grey").css("opacity", 0.5)
} else if (moment().hours() == $("#hour16").text().substring(0,2)) {
    $("#row16").css("background-color","green").css("opacity", 0.9)
} else {
    $("#row16").css("background-color","blue").css("opacity", 0.5)
}
//Save button click functionality
//prompt to add event name for selcted hour blockS
//add to local storage
//display saved events on refresh

//onclick local.storage - set key and value
 