var myMap = L.map("map", {
  center: [34.0522, -118.2437],
  zoom: 8
});

var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

d3.json(link, function(data) {
  // Creating a geoJSON layer with the retrieved data
  geoJson = L.geoJson(data, {
      var baseMaps = {
        "Light Map": lightmap
      },

  // Create an overlayMaps object to hold the bikeStations layer
      var overlayMaps = {
        "Earthquakes": earthquake
      },

  // Create the map object with options
      var map = L.map("map-id", {
        center: [40.73, -74.0059],
        zoom: 12,
        layers: [lightmap, earthquake]
      }),

      L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
      }).addTo(map),

      var earthquakes_data = data.features.title;

      var Markers = [];

      for (var index = 0; index < earthquakes_data.length; index++) {
        var earth_q = earthquakes_data[index];

        var Markers = L.marker([earth_q.geometry.coordinates[0], earth_q.geometry.coordinates[1]])
          .bindPopup("<h3>" + earth_q.type + "<h3><h3>Depth of the Earth quake: " + earth_q.geometry.coordinates[2] + "</h3>");

        // Add the marker to the bikeMarkers array
        Markers.push(Markers);
      }

      // Create a layer group made from the bike markers array, pass it into the createMap function
      createMap(L.layerGroup(Markers));
  });
  d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson").then(createMarkers);
