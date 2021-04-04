let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});


// Chrome sync is like local storage but for chrome extensions
// By adding %c to green you are formatting the text to take in the green color specified in the green variable