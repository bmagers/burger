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

  $(".devourIt").on("click", function() {
    var id = $(this).data("id");

    var devouredBurger = {
      devoured: true
    };
    console.log(devouredBurger);
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        console.log("marked burger as devoured");
        location.reload();
      }
    );
  });

});