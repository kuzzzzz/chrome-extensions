let page = document.getElementById("buttonDiv");

let selectedClassName = "current";

const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

// React a button click by marking the selected button and saving the selection

function handleButtonClick(e) {
  // Remove styling from the previously selected color

  let current = e.target.parentElement.querySelector(`.${selectedClassName}`);

  if (current && current !== e.target) {
    current.classList.remove(selectedClassName);
  }

  //   Mark the button as selected

  let color = e.target.dataset.color;
  e.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
}

// Add a button to the page for each supplied color
function constructOptions(buttonColors) {
  chrome.storage.sync.get("color", (data) => {
    let currentColor = data.color;

    // for each color we were provided

    for (let buttonColor of buttonColors) {
      // ..create a button with that color...
      let button = document.createElement("button");
      button.dataset.color = buttonColor;
      button.style.backgroundColor = buttonColor;

      // ..mark the currently selected color..
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }

      //  ..and register a listener for when that button is clicked
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
}

constructOptions(presetButtonColors);
