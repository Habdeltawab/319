$(document).ready(function(){
    $("#dropDown").click(function(){
      $("#Move").slideToggle("slow");
      $("#Hide").slideToggle("slow");
      $("#Show").slideToggle("slow");
      $("#fadeIn").slideToggle("slow");
    });

    //Alligning the square so it would be 250px from the left.
    $("#Move").click(function(){
      $("#Styles").animate({
        left : '250px'
      });
    });

  //Hiding the square.
  $("#Hide").click(function(){
    $("#Styles").hide();
  });

  //Showing the hidden square
  $("#Show").click(function(){
    $("#Styles").show();
  });

  //Switching two more square in and out
  $("#fadeIn").click(function(){
    $("#Styles_1").fadeToggle(1000);
    $("#Styles_2").fadeToggle(1000);
  });

    $("#heading").click(function(){
        $("h2").css({"background-color": "yellow", "font-size": "200%"});
    });

    $("#paragraph").click(function(){
        $("p").css({"background-color": "yellow", "font-size": "200%"});
    });

    $("#input").click(function(){
        $("input").css({"background-color": "blue", "width": "100%"});
    });

    $("#button").click(function(){
        $("#button2Change").css({"background-color": "#4CAF50", "border": "none",
        "color": "white", "padding": "15px 32px", "text-align": "center",
        "text-decoration": "none", "display": "inline-block", "font-size": "16px",});
    });

    $("#body").click(function(){
        $("body").css({"background-color": "purple"});
    });

});
