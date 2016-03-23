# My Online Resume Project

I built an interactive online resume using javascript files provided by Udacity to display background, project, professional, and education information about myself. 

### My process:
1. Work with a provided helper.js file to replace placeholder data
2. Build four JSON objects representing bio, education, work, and projects sections. 
3. Iterate through each JSON object and append its information to index.html in the correct section using jQuery’s `selector.append()` and `selector.prepend()` 
4. Use the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from your resume JSON objects.
5. Resume includes an interactive map. 
 * In resumeBuilder.js, append the googleMap string to `<div id=”mapDiv”>`.
 * In index.html, uncomment the Google script element: `<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>`
 * In helper.js, at the bottom of the file, uncomment code to initialize map and set fitBounds.

### Project Link: 

[**Online Resume**](http://timmyhall.github.io/P2-frontend-nanodegree-resume/)
