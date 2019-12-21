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





