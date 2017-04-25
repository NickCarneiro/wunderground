function getTemperature() {
    var city = $('#city-input').val()
    if (!city) {
        city = 'San Francisco'
    }
    var url_friendly_city = city.replace(' ', '_')
    var url = 'http://api.wunderground.com/api/59f10b79204a9c8f/conditions/q/CA/' + url_friendly_city + '.json'
    $.get(url, function(res) {
        console.log(res)
        $('#temp').text(res.current_observation['temp_f'])
        $('#city').text(city)
    })
}

$(function() {
    getTemperature()

    $('#submit').on('click', function() {
        getTemperature()
    })
})

