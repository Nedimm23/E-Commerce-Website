// $(document).ready(function () {
//   $("#cf7_controls").on("click", "span", function () {
//     $("#cf7 img").removeClass("opaque");

//     var newImage = $(this).index();

//     $("#cf7 img").eq(newImage).addClass("opaque");

//     $("#cf7_controls span").removeClass("selected");
//     $(this).addClass("selected");
//   });
// });
$(document).ready(function () {
  $("img").click(function (e) {
    var newclass = $(this).attr("id");
    var oldclass = $("#full-size").attr("class");
    $("#full-size").fadeOut(function () {
      $("#full-size").removeClass(oldclass).addClass(newclass).fadeIn("show");
    });
  });
});
