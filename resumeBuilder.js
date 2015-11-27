var bio = {
	"name" : "Timmy Hall",
	"role" : "Web Developer",
	"welcomeMsg" : "Hey yo!",
	"contacts" : {
		"mobile": "412-956-1697",
		"email": "timmy_hall@icloud.com",
		"github": "timmyhall",
		"twitter": "@tphall9",
		"location": "Peoria, IL, USA"
	},
	"skills" : [ "math", "biking", "drawing"
	],
	"bioPic" : "images/TimmyHall.jpg"
}

var work = {
	"jobs": [
		{
			"employer": "Alaska Aces",
			"title": "Professional Athlete",
			"location": "Anchorage, AK, USA",
			"dates": "2012-2013",
			"description": "Hockey player for the St. Louis Blues 'AA' Farm Club in the East Coast Hockey League."
		},
		{
			"employer": "Herlev Eagles",
			"title": "Professional Athlete",
			"location": "Herlev, Denmark",
			"dates": "2014-2015",
			"description": "Hockey Player in The Metal Ligaen, Denmark's top professional league."
		},
		{
			"employer": "Peoria Rivermen",
			"title": "Professional Athlete",
			"location": "Peoria, IL, USA",
			"dates": "2015-Present",
			"description": "Hockey Player for the Chicago Blackhawks 'A' Farm Club in the Southern Professional Hockey League."
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Colorado College",
			"location": "Colorado Springs, CO, US",
			"degree": "BA",
			"major": "Mathematical Economics",
			"dates": "2012",
			"url": "https://www.coloradocollege.edu"
		}
	],
	"onlinecourses": [
		{
			"title": "Office Productivity",
			"school": "Community College of Allegheny County",
			"dates": 2015,
			"url": "https://www.ccac.edu"
		},	
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com"
		}	
	]
}

var projects = {
	"projects": [
		{
			"title": "About Me",
			"dates": "October 2015",
			"description": "Edited a simple HTML, CSS, and JS files to create my very first webpage.",
			"image": "images/aboutme.png"
		},
		{
			"title": "Build a Portfolio Site",
			"dates": "November 2015",
			"description": "Developed a responsive website that will display images, descriptions, and links to all of my Front-End Web Development projects.",
			"image": "images/portfolioproject.png"
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
$("#header").append(formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
$("#header").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
$("#header").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
$("#header").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
$("#header").append(formattedLocation);

var formattedbioPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
$("#header").append(formattedbioPic);

var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio["welcomeMsg"]);
$("#header").append(formattedwelcomeMsg);

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
};

function displayWork() {
	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedworkLocation);

		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedworkDates);

		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedworkDescription);
	}
}

displayWork();

//projects.display = function() {

function displayProjects() {
	for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedprojectTitle);

		var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedprojectDates);

		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedprojectDescription);

		var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
		$(".project-entry:last").append(formattedprojectImage);
	}
}

displayProjects();

function displayEducation() {
	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedschoolName + formattedschoolDegree; 
		$(".education-entry:last").append(formattedNameDegree);

		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedschoolDates);

		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedschoolLocation);

		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedschoolMajor);
	}

	for (onlinecourse in education.onlinecourses) {

		$("#education").append(HTMLonlineClasses);

		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[onlinecourse].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[onlinecourse].school);
		var formattedTitleSchool = formattedonlineTitle + formattedonlineSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses[onlinecourse].dates);
		$(".education-entry:last").append(formattedonlineDates);

		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[onlinecourse].url);
		$(".education-entry:last").append(formattedonlineURL);
	}
}

displayEducation();

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

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);