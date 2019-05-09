$(document).ready(function(){

  $("#burger-form").on("submit", function(event) {
    event.preventDefault();

    const burgerData = {
      burger_name: $("#name-input").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerData
    }).then(function (){
      location.reload();
    })
    .catch(err => console.log(err));
  });

  $(".update-burger").on("click", function(event){
    event.preventDefault()
    const burgerId = $(this).attr("data-id");
    const devoured = $(this).attr("data-devoured")

    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "PUT",
      data: {
        devoured: devoured
      }
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

  $(".delete-burger").on("click", function(event) {
    event.preventDefault()
    const burgerId = $(this).attr("data-id");
    console.log(burgerId)
    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "DELETE"
    })
    .then(() => location.reload())
    .catch(function(err) {
      console.log(err);
    });
  });


});