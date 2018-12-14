function homeDivs() {
  let height = $(document).height();
  $(".divRowHome").css("height", height);

  let width = $(".divImgHome").width();
  width = width + 30;
  $(".divImgHome1").css("width", width);
  $(".divImgHome2").css("width", width);
  height = height - 80;
  $(".divImgHome2").css("height", height);
}