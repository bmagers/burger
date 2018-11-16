$(function() {

  $(".orderForm").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      burger_name: $(".burgerInput").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );

  });

  $(".devourIt").on("click", function() {

    var id = $(this).data("id");

    var devouredBurger = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        location.reload();
      }
    );

  });

});