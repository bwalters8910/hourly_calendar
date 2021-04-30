$(document).ready(function () {
  // all your code goes here

  let currentDay = $("#currentDay");

  function displayDate() {
    let rightNow = moment().format("dddd, MMMM Do YYYY");
    currentDay.text(rightNow);
  }

  function updateRowColor() {
    // set variable to current hour
    // loop over each row of the class (time-block) $each
    // find row time using data attribute (9 < 21) "military time" if/else
    //add the past class to $(this).addClass('past')
  }

  function saveTask() {
    alert("click works");
    //get stuff user put in text area

    //save that to localstorage

    //how message to user

    //hide message after so many seconds
  }

  function init() {
    displayDate();

    //load data from local storage and put it in the correct row
    //#hour9 textarea to value of localstorage key number 'hour-9'
  }

  init();

  //use interval to update row color
  updateRowColor();

  //user clicks save button
  $('.saveBtn').on("click", saveTask);
});



// create a rows dynamically with js or jqeuery and append them to html