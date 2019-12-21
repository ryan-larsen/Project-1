// 940b5d-e6dc01
// var airData = $(this).attr("data-name");
// var queryURL = "https://aviation-edge.com/v2/public/&depIata=?key=940b5d-e6dc01"
// var queryURL ="http://aviation-edge.com/v2/public/flights?key=940b5d-e6dc01&arrIata=CLE"
// var queryURL ="http://aviation-edge.com/v2/public/nearby?key=940b5d-e6dc01&lat=-5.466667&lng=122.6333&distance=100"
// var queryURL ="https://aviation-edge.com/v2/public/flights?key=940b5d-e6dc01&arrIata=cle"
// var queryURL ="http://aviation-edge.com/v2/public/flights?key=&airlineIata=W8"
var queryURL ="https://aviation-edge.com/v2/public/flights?key=940b5d-e6dc01&flightiata=ua1977"
// var queryURL ="https://aviation-edge.com/v2/public/airportDatabase?key=940b5d-e6dc01&codeIataAirport=lax"
$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
})
    .then(function(response) {
            console.log(queryURL);
            console.log(response);
            console.log(response[0].arrival.iataCode)
        })
var queryURL ="https://aviation-edge.com/v2/public/airportDatabase?key=940b5d-e6dc01&codeIataAirport=lax"
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
        })
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=cleveland&appid=166a433c57516f51dfab1f7edaed8413";
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    })
    .then(function(response) {
    console.log(queryURL);
    console.log(response);
    })

    function getForecast(searchValue) {
        $.ajax({
          type: "GET",
          url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=" + APIKEY + "&units=imperial",
          success: function (response) {
    
            //overwrite any existing content with title and empty row
            $("#forecast").html('<h4 class="mt-3">5-Day Forecast:</h4>').append('<div class="row">');
    
            //loop over all forecasts (by 3-hour increments)
            for (var i = 0; i < response.list.length; i++) {
              //only look at forecasts around 3:00pm
              if (response.list[i].dt_txt.indexOf("15:00:00") !== -1) {
                //create html elements for a bootstrap card
                var col = $("<div>").addClass("col-md-2")
                var card = $("<div>").addClass("card bg-secondary text-white")
                var body = $("<div>").addClass("card-body p-3")
                var title = $("<h5>").addClass("card-title").text(new Date(response.list[i].dt_txt).toLocaleDateString())
                var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png");
                var p1 = $("<p>").addClass("card-text").text("Temp: " + response.list[i].main.temp_max + " °F");
                var p2 = $("<p>").addClass("card-text").text("Humidity: " + response.list[i].main.humidity + "%");
    
                //merge together and put on page
                col.append(card.append(body.append(title, img, p1, p2)));
                $("#forecast .row").append(col);
              }
            }
          }
        });
      }