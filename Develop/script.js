$(function () {
  // Get a reference to the #currentDay element
  const currentDayElement = $("#currentDay");

  // Get the current date using Day.js and format it
  const currentDate = dayjs().format('MMMM D, YYYY');

  // Update the #currentDay element with the current date
  currentDayElement.text(currentDate);
});



const currentHour = dayjs().hour(); // Get current hour in 24 hour format


$(".time-block").each(function () {
  const timeBlockHour = parseInt($(this).attr("id").split("-")[1]); // Extract hour from id
  
  if (timeBlockHour < currentHour) {
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


