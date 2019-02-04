function homeDivs() {
  let height = screen.height;
  $(".divRowHome").css("height", height);

  let width = $(".divImgHome").width();
  width = width + 30;
  $(".divImgHome1").css("width", width);
  $(".divImgHome2").css("width", width);
  height = height - 80;
  $(".divImgHome2").css("height", height);
}

function hoverFb() {
  $(".divSocial #icon1 img").attr("src", "./assets/fb_blue.png");
}

function unhoverFb() {
  $(".divSocial #icon1 img").attr("src", "./assets/fb_white.png");
}

function hoverTwitter() {
  $("#icon2 img").attr("src", "./assets/twitter_2.png");
}

function unhoverTwitter() {
  $("#icon2 img").attr("src", "./assets/twiter_icon.svg");
}

function hoverDropdown() {
  $("#navbarDropdownMenuLink").css("color", "orange");
  $("#navbarDropdownMenuLink").css("background-color", "white");
}

function unhoverDropdown() {
  $("#navbarDropdownMenuLink").css("color", "white");
  $("#navbarDropdownMenuLink").css("background-color", "orange");
}
/*
$(document).ready(function() {
  $(".dropdown").on("show.bs.dropdown", function(event) {
    var x = $(event.relatedTarget).text(); // Get the button text
    alert("You clicked on: " + x);
  });
});
*/