// Мені було трохи лінь міняти назви
const images = [
  "images/captcha_of_2030.jpeg",
  "images/CodersLife.jpg",
  "images/console-log-debugger.jpg",
  "images/damn_js.jpg",
  "images/distracted-dev.png",
  "images/dj.jpg",
  "images/github_joke.jpg",
  "images/hacker.jpg",
  "images/it.jpg",
  "images/javascript is shit.jpg",
  "images/javascript.jpg",
  "images/js.jpg",
  "images/JS_Joke.jpg",
  "images/js_obj.jpg",
  "images/keyword this joke.png",
  "images/linux_love_proposal.jpeg",
  "images/love.png",
  "images/meme.PNG",
  "images/new-framework.png",
  "images/open_json_in_vs.jpg",
  "images/pun.png",
  "images/reactui.jpeg",
  "images/WhatsApp Image 2021-01-26 at 00.38.35.jpeg"
];


//hm 18

function hm18_task1_displayInfoDiv() {
  const infoDiv = document.getElementById("hm18_task1_infoDiv");
  infoDiv.style.display = "block";
}

function hm18_task1_hideInfoDiv() {
  const infoDiv = document.getElementById("hm18_task1_infoDiv");
  infoDiv.style.display = "none";
}

document.getElementById("hm18_task1_text").addEventListener("mouseover", hm18_task1_displayInfoDiv);
document.getElementById("hm18_task1_text").addEventListener("mouseleave", hm18_task1_hideInfoDiv);

// Task 2
let link;
function hm18_task2_promptForLink() {
  link = prompt("Please enter a link:");
  console.log("Link", link);
}

function hm18_task2_redirectToLink() {
  if (link !== null) {
    redirectToLink(link);
  }
}

function redirectToLink(link) {
  // check if the link already has a protocol
  if (!link.startsWith('http://') && !link.startsWith('https://')) {
    link = 'http://' + link; // add http protocol if it doesn't exist
  }
  window.location.href = link;
}

// Task 3
function hm18_task3_generateTable() {
  const tableContainer = document.getElementById("hm18_task3_tableContainer");
  tableContainer.innerHTML = "";

  const table = document.createElement("table");
  table.classList.add("table", "table-bordered");

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement("td");
      // Generate a random integer between 1 and 100
      const randomValue = Math.floor(Math.random() * 100) + 1;
      cell.textContent = randomValue;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  tableContainer.appendChild(table);
}

// Task 4


let currentImageIndex = 0;
let intervalId = null;

const slideshowImage = document.getElementById("slideshow-image");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

function displayImage() {
  const imageUrl = images[currentImageIndex];
  slideshowImage.src = imageUrl;
}

function startSlideshow() {
  if (!intervalId) {
    intervalId = setInterval(hm18_changeImage, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
  }
}

function stopSlideshow() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    startButton.disabled = false;
    stopButton.disabled = true;
  }
}

function hm18_changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  displayImage();
}

startButton.addEventListener("click", startSlideshow);
stopButton.addEventListener("click", stopSlideshow);

// Initial image display
displayImage();


// hm20
function hm20_changeImage(direction) {
  let slider = document.getElementById("hm20_slider-img");

  // Use dataset to store the current index
  if (!slider.dataset.currentIndex) {
    slider.dataset.currentIndex = images.indexOf(slider.src.split("/").pop());
  }

  let currentIndex = parseInt(slider.dataset.currentIndex);

  if (direction === 'next' && currentIndex < images.length - 1) {
    currentIndex++;
  } else if (direction === 'prev' && currentIndex > 0) {
    currentIndex--;
  }

  // Update image and currentIndex
  slider.src = images[currentIndex];
  slider.dataset.currentIndex = currentIndex;

  // Visibility handling
  document.getElementById("hm20_prev").style.visibility = currentIndex === 0 ? "hidden" : "visible";
  document.getElementById("hm20_next").style.visibility = currentIndex === images.length - 1 ? "hidden" : "visible";
}

window.onload = function () {
  document.getElementById("hm20_slider-img").src = images[0];
  hm20_changeImage('next');
};





// Utility functions

function selectElementTask2(index) {
  selectedItemTask2 = index;
  updateListTask();
}



function loadTabContent(tabId) {
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
}

loadTabContent("hm18");


function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }
  return num * pow(num, degree - 1);
}

document.getElementById("task-select").addEventListener("change", (event) => {
  loadTabContent(event.target.value);
});

window.onload = function () {
  const currentPageUrl = window.location.href;
  const username = currentPageUrl.split("/")[2].split(".")[0];
  const repoName = currentPageUrl.split("/")[3];
  const githubRepoUrl = `https://github.com/${username}/${repoName}`;

  document.getElementById("github-link").href = githubRepoUrl;
};
