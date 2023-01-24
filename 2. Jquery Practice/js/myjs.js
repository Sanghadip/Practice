$(document).ready(function () {
  //this is body of function
  console.log("This is also my first code");
  ///jquery...
  //jquery Effects,hide,show
  //syntax
  //$(selector).action(callback_function)
  $("#btn1").click(function () {
    // $("#container").hide();
    $("#container").fadeOut(2000, function () {
      alert("gone...");
    });
  });

  $("#btn2").click(function () {
    $("#container").fadeIn(2000);
  });

  $("#btn3").click(function () {
    $("#container").fadeToggle();
  });

  $("#btn4").click(function () {
    $("#container").fadeTo(250, 0.5, function () {
      alert("Faded");
    });
  });

  //slideDown, slideUp, slideToggle

  $("#btn6").click(function () {
    $("#container").slideUp(3000, function () {
      alert("done");
    });
  });
  $("#btn5").click(function () {
    $("#container").slideDown(100);
  });
  $("#btn7").click(function () {
    $("#container").slideToggle();
  });

  //Animate
  //The animate() method performs a custom animation of a set of CSS properties.
  // syntax
  //(selector).animate({styles},speed,easing,callback)

  $("#btn8").click(function () {
    $("#container").animate(
      { width: "200", height: "200", opacity: 0.5, left: "250px" },
      200,
      function () {
        $("#container").animate({
          borderRadius: "20px",
          left: "0",
          height: "200px",
          width: "200px",
        });
      }
    );
  });

  /////////////////////
  $("#btn9").click(function () {
    //  let v=$("#f").val();
    // console.log("value is "+v);
    // $("#f").val("this is done using val function");
    //val function can use for get and set the value.

    //text
    // let c = $("#content").text();
    // console.log(c);

    // $("#content").text("<b>This is new content by sanghadip</b>");
     $("#content").html("<b>This is new content by sanghadip</b>");


  });
});
