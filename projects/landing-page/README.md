# Landing Page Project

## Table of Contents

- [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## code explaination - 2021/01/06

There are three default sections on HTML, using the createSection() to add new section in HTML. Put the number of new section you want to creat on top of the default 3 sections.

addNavList(totalSectionNumber) will create the nav list items corresponding to the number of sections we have.

Finally, the event listner will listen for the "click" on the navbar items and scroll event. Both even listener will add the active style on the active list item and scroll to the corrsponding section.

total files:
index.html
style.css
app.js
