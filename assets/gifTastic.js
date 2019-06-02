$(document).ready(function(){
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

$("#add-car").on("click", function(event) {
event.preventDefault();
var vehicle = $("#car-input").val().trim();
topics.push(vehicle);
renderButtons();

});

renderButtons();
});









//var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=gIRGOQLe3uNe10Qngf230yvMSGeAt8l9";

// $.ajax ({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {
//     console.log (response)
// });