document.getElementById("button").addEventListener("click", openMadonna);

function openMadonna() {
  chrome.tabs.create({url: 'https://www.madonna.com'});
}