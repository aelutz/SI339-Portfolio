// Get the container element
var navContainer = document.querySelector("nav");

//Get all links with class = "active" inside the container
var links = navContainer.querySelector("active");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.querySelector("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
  console.log("Updated class")
}

