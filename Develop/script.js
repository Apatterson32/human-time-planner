$(function () {
  // Get a reference to the #currentDay element
  const currentDayElement = $("#currentDay");

  // Get the current date using Day.js and format it
  const currentDate = dayjs().format('MMMM D, YYYY');

  // Update the #currentDay element with the current date
  currentDayElement.text(currentDate);
});



const currentHour = now.hour(); // Get current hour in 24 hour format

$(".time-block").each(function () {
  const timeBlockId = $(this).attr("id");
  const timeBlockHour = parseInt(timeBlockId.split("-")[1]); // Extract hour from id
  
  if (timeBlockHour , currentHour) {
    $(this).addClass("past"); 
  } else if (timeBlockHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});



$(document).on("click", ".saveBtn", function () {
  // Get ID of the parent time-block
  const timeBlockId = $(this).parent().attr("id");
  
  // Get user input from the textarea within the same time-block
  const userInput = $(this).siblings(".description").val();

  // Save user input in local storage with the time-block ID as the key
  localStorage.setItem(timeBlockId, userInput);
});

  
    
  // TODO: Add a listener for click events on the save button. This code should
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

// const now = dayjs(); 
//   console.log(now.format()); // Format and display the date and time

//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
