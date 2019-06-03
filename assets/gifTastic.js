$(document).ready(function () {
    var topics = ["Toyota Supra", "Nissan Skyline", "Honda NSX", "Lexus RCF", "Subaru STI"];

    function renderButtons() {

        $("#carGarage").empty();

        for (var i = 0; i < topics.length; i++) {
            var gas = $("<button>");
            gas.addClass("vehicle");
            gas.attr("data-name", topics[i]);
            gas.text(topics[i]);
            $("#carGarage").append(gas);
       
        }
    }
     
    $("#add-car").on("click", function (event) {
        event.preventDefault();
        var model = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            model + "&api_key=fdnhntrA0ytRHtfmdTFzNUoicyd1VT1i&limit=10";
  
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var carDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var carImage = $("<img>");
                carImage.attr("src", results[i].images.fixed_height.url);
                carDiv.append(p);
                carDiv.append(carImage);

                $("#gifs-appear-here").prepend(carDiv);
            }
        });
    });

    renderButtons();
});
function newFunction_1(topics, renderButtons) {
    newFunction(topics, renderButtons);
}

function newFunction(topics, renderButtons) {
    var vehicle = $("#car-input").val().trim();
    topics.push(vehicle);
    renderButtons();
}

