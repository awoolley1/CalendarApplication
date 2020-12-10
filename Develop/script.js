//target and set current date
var currentDateDisplay = $("#currentDayContain");
var dateTimeCode = moment()
currentDateDisplay.text(moment())
 

//Color rows past,present,future
if (moment().hours() > $("#hour9").text().substring(0,2)) {
    $("#row9").css("background-color","grey").css("opacity", 0.5)
    $("#task9").attr("disabled", "true")
} else if (moment().hours() == $("#hour9").text().substring(0,2)) {
    $("#row9").css("background-color","green").css("opacity", 0.5)
} else {
    $("#row9").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour10").text().substring(0,2)) {
    $("#row10").css("background-color","grey").css("opacity", 0.5)
    $("#task10").attr("disabled", "true")
} else if (moment().hours() == $("#hour10").text().substring(0,2)) {
    $("#row10").css("background-color","green").css("opacity", 0.5)
} else {
    $("#row10").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour11").text().substring(0,2)) {
    $("#row11").css("background-color","grey").css("opacity", 0.5)
    $("#task11").attr("disabled", "true")
} else if (moment().hours() == $("#hour11").text().substring(0,2)) {
    $("#row11").css("background-color","green").css("opacity", 0.5)
} else {
    $("#row11").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour12").text().substring(0,2)) {
    $("#row12").css("background-color","grey").css("opacity", 0.5)
    $("#task12").attr("disabled", "true")
} else if (moment().hours() == $("#hour12").text().substring(0,2)) {
    $("#row12").css("background-color","green").css("opacity", 0.5)
} else {
    $("#row12").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour13").text().substring(0,2)) {
    $("#row13").css("background-color","grey").css("opacity", 0.5)
    $("#task13").attr("disabled", "true")
} else if (moment().hours() == $("#hour13").text().substring(0,2)) {
    $("#row13").css("background-color","green").css("opacity", 0.9)
} else {
    $("#row13").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour14").text().substring(0,2)) {
    $("#row14").css("background-color","grey").css("opacity", 0.5)
    $("#task14").attr("disabled", "true")
} else if (moment().hours() == $("#hour14").text().substring(0,2)) {
    $("#row14").css("background-color","green").css("opacity", 0.9)
} else {
    $("#row14").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour15").text().substring(0,2)) {
    $("#row15").css("background-color","grey").css("opacity", 0.5)
    $("#task15")
} else if (moment().hours() == $("#hour15").text().substring(0,2)) {
    $("#row15").css("background-color","green").css("opacity", 0.9)
} else {
    $("#row15").css("background-color","blue").css("opacity", 0.5)
}

if (moment().hours() > $("#hour16").text().substring(0,2)) {
    $("#row16").css("background-color","grey").css("opacity", 0.5)
    $("#task16")
} else if (moment().hours() == $("#hour16").text().substring(0,2)) {
    $("#row16").css("background-color","green").css("opacity", 0.9)
} else {
    $("#row16").css("background-color","blue").css("opacity", 0.5)
}


//Save to local storage 
var b9 = $("#b9")
var b10 = $("#b10")
var b11 = $("#b11")
var b12 = $("#b12")
var b13 = $("#b13")
var b14 = $("#b14")
var b15 = $("#b15")
var b16 = $("#b16")

var task9 = $("#task9")
var task10 = $("#task10")
var task11 = $("#task11")
var task12 = $("#task12")
var task13 = $("#task13")
var task14 = $("#task14")
var task15 = $("#task15")
var task16 = $("#task16")

//onclick button function
b9.click(function() {
    localStorage.setItem("event9h", task9.val())
});

b10.click(function() {
    localStorage.setItem("event10h", task10.val())
});

b11.click(function() {
    localStorage.setItem("event11h", task11.val())
});

b12.click(function() {
    localStorage.setItem("event12h", task12.val())
});

b13.click(function() {
    localStorage.setItem("event13h", task13.val())
});

b14.click(function() {
    localStorage.setItem("event14h", task14.val())
});

b15.click(function() {
    localStorage.setItem("event15h", task15.val())
});

b16.click(function() {
    localStorage.setItem("event16h", task16.val())
});

//load events in local storage - Global Scope
if (localStorage.getItem("event9h") !== null) {
    task9.val((localStorage.getItem("event9h")))
  } 

if (localStorage.getItem("event10h") !== null) {
    task10.val((localStorage.getItem("event10h")))
  } 
  
  if (localStorage.getItem("event11h") !== null) {
    task11.val((localStorage.getItem("event11h")))
  } 

if (localStorage.getItem("event12h") !== null) {
    task12.val((localStorage.getItem("event12h")))
  } 

if (localStorage.getItem("event13h") !== null) {
    task13.val((localStorage.getItem("event13h")))
  } 

if (localStorage.getItem("event15h") !== null) {
    task15.val((localStorage.getItem("event15h")))
  } 

if (localStorage.getItem("event16h") !== null) {
    task16.val((localStorage.getItem("event16h")))
  } 
