//var $ = require('jQuery');

//Variables
var monthName = [
	{month:'January', numDays: 31},
	{month:'February', numDays: 28},
	{month:'March', numDays: 31},
	{month:'April', numDays: 30},
	{month:'May', numDays: 31},
	{month:'June', numDays: 30},
	{month:'July', numDays: 31},
	{month:'August', numDays: 31}, 
	{month:'September', numDays: 30}, 
	{month:'October', numDays: 31},
	{month:'November', numDays: 30}, 
	{month:'December', numDays: 31}
];
var dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var today = new Date();
var tdate = today.getDate();
var tday = today.getDay();
var tmonth = today.getMonth();
var tyear = 1900 + today.getYear();

for(i = 0; i < 7; i++){
	var row = document.createElement("div");
	row.className = "row";
	document.getElementById("calendar").appendChild(row);
	if (i == 0){
		for(j = 0; j < 7; j++){
			var days = document.createElement("span");
			days.className = "days";
			document.getElementsByClassName("row")[0].appendChild(days);
		}
	}
	else {
		for(j=0;j<7;j++){
			//Creates date container
			var box = document.createElement("span");
			box.className = "box";
			//Adds date inside the container
			var date = document.createElement("span");
			date.className = "date";
			if(j+((i-1)*7) == tdate + tday) date.id = "current";
			
			document.getElementsByClassName("row")[i].appendChild(box);
			document.getElementsByClassName("box")[j+((i-1)*7)].appendChild(date);
			
			var boxDate = (j+((i-1)*7)) - tday;
			if(boxDate <= 0){
				document.getElementsByClassName("date")[j+((i-1)*7)].innerHTML = monthName[tmonth-1].numDays + boxDate;
				date.className = "date greyed";
			}
			else if(boxDate > 0 && boxDate <= monthName[tmonth].numDays){
				document.getElementsByClassName("date")[j+((i-1)*7)].innerHTML = boxDate;
			}
			else {
				document.getElementsByClassName("date")[j+((i-1)*7)].innerHTML = boxDate-monthName[tmonth].numDays;
				date.className = "date greyed";
			}
		}
	}
}

for(i=0;i<7;i++){
	document.getElementsByClassName("days")[i].innerHTML = dayName[i];
}	

document.getElementById("header").innerHTML = monthName[tmonth].month + " " + tyear;
	
document.getElementById("calendar").appendChild(document.createElement("br"));

$(function(){
  $('.box').css({ height: $(window).innerHeight()/10 });
  $(window).resize(function(){
    $('.box').css({ height: $(window).innerHeight()/10 });
  });
});