//Variables
var monthName = ['January','February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var jan=31; var feb=28; var mar=31; var apr=30; var may=31; var jun=30; 
var jul=31; var aug=31; var sep=30; var oct=31; var nov=30; var dec=31;
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
			var box = document.createElement("span");
			box.className = "box";
			var date = document.createElement("span");
			date.className = "date";
			if(j+1+((i-1)*7) == tdate) date.id = "current";
			document.getElementsByClassName("row")[i].appendChild(box);
			document.getElementsByClassName("box")[j+((i-1)*7)].appendChild(date);
			document.getElementsByClassName("date")[j+((i-1)*7)].innerHTML = j+1+((i-1)*7);
		}
	}
}

for(i=0;i<7;i++){
	document.getElementsByClassName("days")[i].innerHTML = dayName[i];
}	

document.getElementById("header").innerHTML = monthName[tmonth];
	
document.getElementById("calendar").appendChild(document.createElement("br"));