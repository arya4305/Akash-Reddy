function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 17.424882221260784, lng: 78.51328664641734};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hyderabad, INDIA' // Title Location
    });
}