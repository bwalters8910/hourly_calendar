$(document).ready(function () {

  let currentDay = $("#currentDay");

  function displayDate() {
    let rightNow = moment().format("dddd, MMMM Do YYYY");
    currentDay.text(rightNow);
  }

  function updateRowColor() {
    // set variable to current hour
    let hour = new Date().getHours();
    //console.log(hour);

    for (i = 9; i < 18; i++) {
      let compareTime = $(`#hour${i}`);
      //console.log(compareTime[0]);
      //console.log(typeof compareTime);
      if (hour > i) {
        compareTime.addClass("past");
      }
      else if (hour < i) {
        compareTime.addClass("future");
      }
      else {
        compareTime.addClass("present");
      }
    }
  }

  function saveTask() {
    let userInput9 = document.querySelector("#input9").value;
    localStorage.setItem("hour9", userInput9);
    let userInput10 = document.querySelector("#input10").value;
    localStorage.setItem("hour10", userInput10);
    let userInput11 = document.querySelector("#input11").value;
    localStorage.setItem("hour11", userInput11);
    let userInput12 = document.querySelector("#input12").value;
    localStorage.setItem("hour12", userInput12);
    let userInput13 = document.querySelector("#input13").value;
    localStorage.setItem("hour13", userInput13);
    let userInput14 = document.querySelector("#input14").value;
    localStorage.setItem("hour14", userInput14);
    let userInput15 = document.querySelector("#input15").value;
    localStorage.setItem("hour15", userInput15);
    let userInput16 = document.querySelector("#input16").value;
    localStorage.setItem("hour16", userInput16);
    let userInput17 = document.querySelector("#input17").value;
    localStorage.setItem("hour17", userInput17);
  }

  function showSavedTasks() {
    let textRow9 = document.querySelector("#input9");
    let savedTask9 = localStorage.getItem("hour9");
    textRow9.textContent = savedTask9;
    let textRow10 = document.querySelector("#input10");
    let savedTask10 = localStorage.getItem("hour10");
    textRow10.textContent = savedTask10;
    let textRow11 = document.querySelector("#input11");
    let savedTask11 = localStorage.getItem("hour11");
    textRow11.textContent = savedTask11;
    let textRow12 = document.querySelector("#input12");
    let savedTask12 = localStorage.getItem("hour12");
    textRow12.textContent = savedTask12;
    let textRow13 = document.querySelector("#input13");
    let savedTask13 = localStorage.getItem("hour13");
    textRow13.textContent = savedTask13;
    let textRow14 = document.querySelector("#input14");
    let savedTask14 = localStorage.getItem("hour14");
    textRow14.textContent = savedTask14;
    let textRow15 = document.querySelector("#input15");
    let savedTask15 = localStorage.getItem("hour15");
    textRow15.textContent = savedTask15;
    let textRow16 = document.querySelector("#input16");
    let savedTask16 = localStorage.getItem("hour16");
    textRow16.textContent = savedTask16;
    let textRow17 = document.querySelector("#input17");
    let savedTask17 = localStorage.getItem("hour17");
    textRow17.textContent = savedTask17;
  }

  function init() {
    displayDate();
    showSavedTasks();
    updateRowColor();
  }

  init();

  $(".saveBtn").on("click", saveTask);
});

// if there's time...create a rows dynamically with js or jqeuery and append them to html