//Variables
var monthName = ['January','February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dayName = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var jan=31; var feb=28; var mar=31; var apr=30; var may=31; var jun=30; 
var jul=31; var aug=31; var sep=30; var oct=31; var nov=30; var dec=31;
var today = new Date();
var date = today.getDate();
var day = today.getDay();
var month = today.getMonth();
var year = 1900 + today.getYear();
//document.getElementById("test").innerHTML = dayName[day] + ", " + monthName[month] + " " + date + ", " + year;
for(i = 0; i < 6; i++){
	var row = document.createElement("div");
	row.className = "row";
	document.getElementById("calendar").appendChild(row);
	for(j=0;j<7;j++){
		var box = document.createElement("span");
		box.className = "box";
		var date = document.createElement("span");
		date.className = "date";
		document.getElementsByClassName("row")[i+1].appendChild(box);
		document.getElementsByClassName("box")[j+(i*7)].appendChild(date);
		document.getElementsByClassName("date")[j+(i*7)].innerHTML = j+1+(i*7);
	}
}
//for(i)
document.getElementById("header").innerHTML = monthName[month];
for(i=0;i<7;i++){
	document.getElementsByClassName("days")[i].innerHTML = dayName[i];
}	
document.getElementById("calendar").appendChild(document.createElement("br"));