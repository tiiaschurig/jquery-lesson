$(document).ready(function() {
  $(document).click(function() {
    $("p").hide(1000, function() {
      $("p").show(1000);
    });

    $("#first").fadeOut(1000, function() {
      $("#first").fadeIn(1000);
    });

    $("#second").fadeOut(2000, function() {
      $("#second").fadeIn(2000);
    });

    $("#third").fadeOut(3000, function() {
      $("#third").fadeIn(3000);
    });

    $(".box1").slideUp(4000);

    $(".box3").animate({
      opacity: .2
    }, 4000);

    $("h1").click(function() {
      document.getElementById("surprise").innerHTML = "Surprise! It's still a header!"
    });
  });
});

//I wanted to add another argument to the click function to above to make the color red but I couldn't get it to work.
// , function() {
//   $("h1").animate({
//     color: red,
//     width: 100,
//   }, 1000);
// }
