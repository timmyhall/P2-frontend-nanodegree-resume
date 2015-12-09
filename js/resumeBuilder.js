var bio = {
name : 'Timmy Hall',
role : 'Web Developer',
welcomeMessage : 'Hey yo!',
contacts : {
mobile : '555-555-1234',
email : 'bananas@gmail.com',
github : 'timmyhall',
twitter : '@tphall9',
location : 'Peoria, IL, USA'
},
skills : [ 'math', 'biking', 'drawing'
],
biopic : 'images/biopic.jpg'
};

var work = {
jobs : [
{
employer : 'Alaska Aces',
title : 'Professional Athlete',
location : 'Anchorage, AK, USA',
dates : '2012-2013',
description : 'Hockey player for the St. Louis Blues "AA" Farm Club in the East Coast Hockey League.'
},
{
employer : 'Herlev Eagles',
title : 'Professional Athlete',
location : 'Copenhagen, Denmark',
dates : '2014-2015',
description : 'Hockey Player in The Metal Ligaen, the top professional league in Denmark.'
},
{
employer : 'Peoria Rivermen',
title : 'Professional Athlete',
location : 'Peoria, IL, USA',
dates : '2015-Present',
description : 'Hockey Player for the Chicago Blackhawks "A" Farm Club in the Southern Professional Hockey League.'
}
]
};

var education = {
schools : [
{
name : 'Colorado College',
location : 'Colorado Springs, CO, US',
degree : 'BA',
majors : ['Mathematical Economics'
],
dates : 2012,
url : 'https://www.coloradocollege.edu'
}
],
onlineCourses : [
{
title : 'Office Productivity',
school : 'Community College of Allegheny County',
dates : 2015,
url : 'https://www.ccac.edu'
},
{
title : 'Front-End Web Development',
school : 'Udacity',
dates : 2015,
url : 'https://www.udacity.com'
}
]
};

var projects = {
projects : [
{
title : 'About Me',
dates : 'October 2015',
description : 'Edited a simple HTML, CSS, and JS files to create my very first webpage.',
images : ['images/aboutme.png'
]
},
{
title : 'Build a Portfolio Site',
dates : 'November 2015',
description : 'Developed a responsive website that will display images, descriptions, and links to all of my Front-End Web Development projects.',
images : ['images/portfolioproject.png'
]
}
]
};

bio.display = function() {

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);

var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedName).append(formattedRole).append(formattedMobile).append(formattedEmail).append(formattedTwitter).append(formattedGithub).append(formattedLocation).append(formattedbioPic).append(formattedwelcomeMsg);
$("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedTwitter).append(formattedGithub).append(formattedLocation);

if (bio.skills.length > 0) {

$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
}
};

bio.display();

work.display = function() {
for (var job in work.jobs) {

$("#workExperience").append(HTMLworkStart);

var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;

var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

$(".work-entry:last").append(formattedEmployerTitle).append(formattedworkLocation).append(formattedworkDates).append(formattedworkDescription);
}
};

work.display();

projects.display = function() {
for (var project in projects.projects) {

$("#projects").append(HTMLprojectStart);

var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
$(".project-entry:last").append(formattedprojectTitle).append(formattedprojectDates).append(formattedprojectDescription).append(formattedprojectImage);
}
};

projects.display();

education.display = function() {

for (var school in education.schools) {
$("#education").append(HTMLschoolStart);

var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
var formattedNameDegree = formattedschoolName + formattedschoolDegree;

var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

$(".education-entry:last").append(formattedNameDegree).append(formattedschoolDates).append(formattedschoolLocation).append(formattedschoolMajor);
}

for (var onlinecourse in education.onlineCourses) {

var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);
var formattedTitleSchool = formattedonlineTitle + formattedonlineSchool;

var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].dates);

var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);

$(".education-entry:last").append(formattedTitleSchool).append(formattedonlineDates).append(formattedonlineURL);
}
};

education.display();

//function locationizer(work_obj) {
//var locationArray= [];

//for (job in work_obj.jobs) {
//	var newLocation = work_obj.jobs[job].location;
//locationArray.push(newLocation);
//}

//return locationArray;
//}

function inName(name) {
console.log(name);
name = name.trim().split(" ");
name[1] = name[1].toUpperCase();
name[0] = name[0].slice(0,1).toUpperCase() +
name[0].slice(1).toLowerCase();

return name[0] +" "+ name[1];
}

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

clickLocations = [];

function logClicks(x,y) {
clickLocations.push(
{
x: x,
y: y
}
);
console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {

});
