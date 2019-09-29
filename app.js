// Sectionb jquery video popup

$("#videolink").magnificPopup({
  type: "inline",
  midClick: true
});

// Prevent Default
document.querySelector(".email-button").addEventListener("submit", function(e) {
  e.preventDefault();
});
