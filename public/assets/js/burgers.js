$(function() {

  $(".orderForm").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $(".burgerInput").val().trim()
    };

    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("ordered the burger");
        location.reload();
      }
    );
  });

});