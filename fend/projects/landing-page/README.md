# Landing Page Project

## Table of Contents

- [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## code explaination

The addNavList function is to create the number of lists we need.
Here I created 4 list items.

There are three default sections on HTML, using the createSection() to add new section in HTML. Put the order of section as the argument in createSection(orderOfTheSection): start from 4. (Because there are three sections exited already.)

Finally, the event listner will listen for the "click" on the navbar items. It will add the active style on the active list item and scroll to the corrsponding section.
