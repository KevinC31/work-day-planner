// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const time1 = document.getElementById("hour-9");
const time2 = document.getElementById("hour-10");
const time3 = document.getElementById("hour-11");
const saveButton = document.getElementsByClassName('btn saveBtn col-2 col-md-1');


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
    const userInput = document.getElementById('hour-9');
    localStorage.setItem('hour-9', hour-9);
  }
   
  const saveButton = document.getElementsByClassName('btn saveBtn');
  saveButton.addEventListener('click');
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  const displayDate = document.querySelector('display-3');

  //displayDate => {
    const date = dayjs().format('MMM DD YYY');
    const dateElement = displayDate.querySelector('.display-3');
    console.log(dayJs());
  

  
});
