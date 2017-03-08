'use strict';

var bio = {
    name: 'Timmy Hall',
    role: 'Pit Crew Performer',
    welcomeMessage: '',
    contacts: {
        email: 'thall@hmsracing.com',
        github: 'timmyhall',
        twitter: '@tphall9',
        location: 'Charlotte, NC, USA'
    },
    skills: ['Python', 'Java', 'JavaScript', 'jQuery', 'Knockout', 'Bootstrap', 'Grunt', 'Git/Github'],
    biopic: 'images/biopic.jpg'
};

var work = {
    jobs: [{
        employer: 'Hendrick Motorsports',
        title: 'Professional Athlete',
        location: 'Charlotte, NC, USA',
        dates: '2016-Present',
        description: 'Tire Changer for the Hendrick Motorsports Developmental Pit Crew'
    }, {
        employer: 'Wheeling Nailers',
        title: 'Professional Athlete',
        location: 'Wheeling, WV, USA',
        dates: '2015-2016',
        description: 'Hockey Player for the Pittsburgh Penguins "AA" Farm Club in the East Coast Hockey League.'
    }, {
        employer: 'Herlev Eagles',
        title: 'Professional Athlete',
        location: 'Copenhagen, Denmark',
        dates: '2014-2015',
        description: 'Hockey Player in The Metal Ligaen, the top professional league in Denmark.'
    }, {
        employer: 'Alaska Aces',
        title: 'Professional Athlete',
        location: 'Anchorage, AK, USA',
        dates: '2012-2013',
        description: 'Hockey player for the St. Louis Blues "AA" Farm Club in the East Coast Hockey League.'
    }]
};

var education = {
    schools: [{
        name: 'Colorado College',
        location: 'Colorado Springs, CO, US',
        degree: 'BA',
        majors: ['Mathematical Economics'],
        dates: 2012,
        url: 'https://www.coloradocollege.edu'
    }],
    onlineCourses: [{
        title: 'Front-End Web Development',
        school: 'Udacity',
        dates: 2016,
        url: 'https://www.udacity.com'
    }, {
        title: 'Office Productivity',
        school: 'Community College of Allegheny County',
        dates: 2015,
        url: 'https://www.ccac.edu'
    }]
};

var projects = {
    projects: [{
        title: 'Neighborhood Map',
        dates: 'April 2016',
        description: 'Developed a single page application featuring a map and information from the Foursquare API of my favorite breweries in Pittsburgh.',
        images: ['images/brewery.png']
    }, {
        title: 'Classic Arcade Game Frogger',
        dates: 'January 2016',
        description: 'Created a HTML5 Canvas powered video game using the best practices in Object Oriented Javascript.',
        images: ['images/frogger.png']
    }, {
        title: 'Build a Portfolio Site',
        dates: 'November 2015',
        description: 'Developed a responsive website with images, descriptions, and links to all of my Front-End Web Development projects.',
        images: ['images/portfolioproject.png']
    }, {
        title: 'About Me',
        dates: 'October 2015',
        description: 'Created and edited HTML, CSS, and JS files to create my very first webpage.',
        images: ['images/aboutme.png']
    }]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);

    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedName,formattedRole,formattedEmail,formattedTwitter,formattedGithub,formattedLocation,formattedbioPic,formattedwelcomeMsg);
    $("#footerContacts").append(formattedEmail,formattedTwitter,formattedGithub,formattedLocation);

/*

*/
    if (bio.skills.length) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
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

        $(".work-entry:last").append(formattedEmployerTitle,formattedworkLocation,formattedworkDates,formattedworkDescription);
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
        $(".project-entry:last").append(formattedprojectTitle,formattedprojectDates,formattedprojectDescription,formattedprojectImage);
    }
}

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

        $(".education-entry:last").append(formattedNameDegree,formattedschoolDates,formattedschoolLocation,formattedschoolMajor);
    }

        $("#education").append(HTMLonlineClasses);

    for (var onlinecourse in education.onlineCourses) {

        $("#education").append(HTMLschoolStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);
        var formattedTitleSchool = formattedonlineTitle + formattedonlineSchool;

        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].dates);

        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);

        $(".education-entry:last").append(formattedTitleSchool,formattedonlineDates,formattedonlineURL);
    }
};

education.display();

// Append map for work locations
$("#mapDiv").append(googleMap);