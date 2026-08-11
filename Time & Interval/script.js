setTimeout(function () {
    console.log("Yeou")
}, 1000)
var a = setInterval(function () {
    console.log("chai")
}, 1000)


clearInterval(a);


let count = 10;
let int = setInterval(function () {

    if (count > 1) {
        count--;
        console.log(count)
    }
    else {
        clearInterval(int)

    }

}, 1000)

document.getElementById('download-btn').addEventListener('click', function() {
  const progressBar = document.getElementById('my-bar');
  const progressText = document.getElementById('progress-text');
  const button = document.getElementById('download-btn');
  
  let width = 0;
  button.disabled = true;
  button.innerText = "Downloading...";
  
  // Simulate download progress
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      button.innerText = "Download Complete";
      button.style.backgroundColor = "#2dc92d"; // Turn button green
    } else {
      // Add random amount to progress to make it look realistic
      width += Math.floor(Math.random() * 10) + 1; 
      if (width > 100) width = 100;
      
      progressBar.style.width = width + '%';
      progressText.innerText = width + '%';
    }
  }, 10); // Updates every 300ms
});