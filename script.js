// 940b5d-e6dc01
// var airData = $(this).attr("data-name");
// var queryURL = "https://aviation-edge.com/v2/public/&depIata=?key=940b5d-e6dc01"
// var queryURL ="http://aviation-edge.com/v2/public/flights?key=940b5d-e6dc01&arrIata=CLE"
// var queryURL ="http://aviation-edge.com/v2/public/nearby?key=940b5d-e6dc01&lat=-5.466667&lng=122.6333&distance=100"
// var queryURL ="https://aviation-edge.com/v2/public/flights?key=940b5d-e6dc01&arrIata=cle"
// var queryURL ="http://aviation-edge.com/v2/public/flights?key=&airlineIata=W8"
$(document).ready(function() {
    $("#searchBtn").on("click", function(e) {
    e.preventDefault()
      var searchValue = $("#searchValue").val();
    //   var searchValue = $(this).attr("#searchValue");
      console.log(searchValue);
    $("#searchValue").val("");
    searchFlight(searchValue);
})
function searchFlight(searchValue) {
var queryURL ="https://aviation-edge.com/v2/public/flights?key=940b5d-e6dc01&flightiata=" + searchValue
// var queryURL ="https://aviation-edge.com/v2/public/flights?key=940b5d-e6dc01&flightiata=ua1977"
// ua1977
$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
})
    .then(function(response) {
            console.log(queryURL);
            console.log(response);
            console.log(response[0].arrival.iataCode)
            seachIata(response[0].arrival.iataCode)
        })
    }
function seachIata(iataValue){
// var queryURL ="https://aviation-edge.com/v2/public/airportDatabase?key=940b5d-e6dc01&codeIataAirport=lax"
var queryURL ="https://aviation-edge.com/v2/public/airportDatabase?key=940b5d-e6dc01&codeIataAirport=" + iataValue
console.log(iataValue)
$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
})
    .then(function(response) {
            console.log(queryURL);
            console.log(response);
            console.log(response[0].latitudeAirport)
            console.log(response[0].longitudeAirport)
            var lat= response[0].latitudeAirport
            var lon= response[0].longitudeAirport
            iataWeather(lat, lon)
        })
    }
function iataWeather(lat, lon){
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=cleveland&appid=166a433c57516f51dfab1f7edaed8413";
var queryURL= "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=166a433c57516f51dfab1f7edaed8413"
$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    })
    .then(function(response) {
    console.log(queryURL);
    console.log(response);
    console.log(response.name)
    console.log(response.wind.speed)
    console.log(response.main.humidity)
    console.log(response.main.temp)
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    console.log(tempF)
    $("#city").html("<h1>" + response.name + " Weather Details</h1>");
    $("#wind").text("Wind Speed: " + response.wind.speed);
    $("#humid").text("Humidity: " + response.main.humidity);
    $("#temp").text("Temperature (F) " + tempF);
    var iataName = response.name
    iataForecast(iataName)
})}
function iataForecast(iataName){
var queryURL= "https://api.openweathermap.org/data/2.5/forecast?q=" + iataName + "&appid=166a433c57516f51dfab1f7edaed8413"
$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    })
    .then(function(response) {
    console.log(queryURL);
    console.log(response);
    $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");
    for (var i = 0; i < response.list.length; i++) {
      if (response.list[i].dt_txt.indexOf("15:00:00") !== -1) {
        var col = $("<div>").addClass("col-md-2");
        var card = $("<div>").addClass("card bg-light text-dark");
        var body = $("<div>").addClass("card-body p-2");
        var title = $("<h5>").addClass("card-title").text(new Date(response.list[i].dt_txt).toLocaleDateString());
        var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png");
        var p1 = $("<p>").addClass("card-text").text("Temp: " + response.list[i].main.temp_max + " °F");
        var p2 = $("<p>").addClass("card-text").text("Humidity: " + response.list[i].main.humidity + "%");
        col.append(card.append(body.append(title, img, p1, p2)));
        $("#forecast .row").append(col);
      }
    }
  }
)
}})