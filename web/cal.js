/*****************Variables*******************/

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
var today = new Date()
var tdate = today.getDate();
var tday = today.getDay();
var tmonth = today.getMonth();
var tyear = 1900 + today.getYear();
var offset=7-(tdate-tday)%7;
//console.log(monthName[tmonth].numDays%7+monthName[tmonth-1].numDays%7);

/***************Page Setup******************/
//Add items to sidebar
var sidebarList = document.createElement("ul");
var sidebarListElement = document.createElement("li");
sidebarList.className = "sideList";
sidebarListElement.className = "listElement";
document.getElementsByClassName("sidebar")[0].appendChild(sidebarList);
sidebarList.appendChild(sidebarListElement);
sidebarListElement.innerHTML = "Add New Event";
sidebarListElement.onclick = newEvent;

//Month and Year
var heading = document.getElementById("header");
heading.innerHTML = monthName[tmonth].month + " " + tyear;
heading.onclick = monthClicked;
document.getElementById("calendar").appendChild(document.createElement("br"));

/***************Resizing*****************/

function resize(){
  $('.box').css({ height: $(window).innerHeight()/10 });
  $(window).resize(function(){
    $('.box').css({ height: $(window).innerHeight()/10 });
  });
}

/**********Show and hide selected elements***********/

//Function To Display Popup
function div_show(item) {
	document.getElementById(item).style.display = "block";
	console.log(item + " has been shown!");
}
//Function to Hide Popup
function div_hide(item){
	document.getElementById(item).style.display = "none";
	console.log(item + " has been hidden!");
}

/***************Main Calendar***************/
function monthView(item){
document.getElementById("calendar").innerHTML="";
console.log(offset);
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
			box.onclick=function(){dayView(this.getElementsByClassName("date")[0].innerHTML);};
			if((j+((i-2)*7)+(7-offset)) == tdate) date.id = "current";
			
			document.getElementsByClassName("row")[i].appendChild(box);
			document.getElementsByClassName("box")[j+((i-1)*7)].appendChild(date);
			
			var boxDate = j+((i-1)*7)-offset;
			console.log(boxDate);
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
	resize();
	}
	for(i=0;i<7;i++){
		document.getElementsByClassName("days")[i].innerHTML = dayName[i];
	}	
}

/******************Day View*****************/

function dayView(item){
	document.getElementById("calendar").innerHTML = "";
	var dView = document.createElement("div");
	dView.id = "dayView";
	var itemValue = parseInt(item);
	dView.innerHTML = dayName[(itemValue + offset)%7] + " " + item;
	document.getElementById("calendar").appendChild(dView);
	resize();
}

/******************Event Form****************/

function newEvent(){
	console.log(this.innerHTML + " button was clicked");
	evPopup = document.getElementById('eventPopup');
	div_show('eventPopup');
	var eForm=
	"<div class=\"formBGDark\">" +
	"<div class=\"formContainer\">" +
	"<form action=\"#\" class=\"fillForm\" method=\"post\" name=\"form\">" +
	"<img class= \"close\" src=\"https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png\" onclick =\"div_hide('eventPopup')\">" +
	"<h2>New Event</h2><hr/>" +
	"<input id=\"name\" name=\"name\" placeholder=\"Name\" type=\"text\">" +
	"<input id=\"strtTime\" name=\"startTime\" placeholder=\"Start Time\" type=\"text\">" +
	"<input id=\"endTime\" name=\"endTime\" placeholder=\"End Time\" type=\"text\">" +
	"<textarea id=\"desc\" name=\"description\" placeholder=\"Description\">" +
	"</textarea><a href=\"javascript:%20check_empty()\" id=\"submit\">Send</a></form>" +
	"</div></div>";
	evPopup.innerHTML = eForm;
	console.log("Form has been generated!");
}

// Validating Empty Field
function check_empty() {
	if (document.getElementById('name').value == "" || document.getElementById('strtTime').value == "" || document.getElementById('endTime').value == "" || document.getElementById('desc').value == "") {
		alert("Fill All Fields !");
	} 
	else {
		document.getElementById('eForm').submit();
		div_hide('eventPopup');
		alert("Form Submitted Successfully...");
	}
}

/****************Month Form******************/

function monthClicked(){
	console.log(this.innerHTML + " button was clicked");
	moPopup = document.getElementById('monthPopup');
	div_show('monthPopup');
	var moForm=
	"<div class=\"formBGNone\">" +
	"<div class=\"formContainer\">" +
	"<div class=\"fillForm\">" +
	"<img class= \"close\" src=\"https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png\" onclick =\"div_hide('monthPopup')\">" +
	"<h2>Months</h2><hr/>" +
	"<ul id='monthsList'>" + 
	"</ul>"+
	"</div></div>";
	moPopup.innerHTML = moForm;
	console.log("Month list has been displayed!");
	iterate(0,12);
}

//Change the below function, not neede/no submit button
function submitMo(){
		document.getElementById('moForm').submit();
		div_hide(moPopup);
		alert("Month Selected Successfully...");
}

function iterate(initial, final){
	for(;initial<final;initial++){
		monthli = document.createElement('li');
		monthli.className = 'monthListItem';
		document.getElementById('monthsList').appendChild(monthli);
		monthli.innerHTML = monthName[initial].month;
		monthli.onclick = function(){div_hide('monthPopup');monthView(this.innerHTML);console.log(this.innerHTML + " was clicked.");};
	}
}
