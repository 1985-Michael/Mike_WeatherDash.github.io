//Input and button Functions
function show(data) {
    return "<p id='contentheader'><strong>Current Weather for " + data.name + ", " + data.sys.country + "</p>" +
        "<p><strong>Weather</strong>: " + data.weather[0].main + "</p>" +
        "<p><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> " + data.weather[0].description + "</p>" +
        "<p id='temp'><strong>Temperature</strong>: " + data.main.temp + " &deg;F </p>" +
        "<p><strong>Humidity</strong>: " + data.main.humidity + " %</p>" +
        "<p><strong>Wind Speed</strong>: " + data.wind.deg + " m/s </p>"

}
$(document).ready(function() {

    $('#submitBtn').click(function() {

        var city = $('#city').val();

        if (city != '') {

            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" +
                    "&APPID=0a52c485a84c902cca21c046f991949c",
                method: "GET",
                success: function(data) {
                    var showDisplay = show(data)

                    $('#showResults').html(showDisplay);

                    $('#city').val('');

                }

            })

        }

    })

})