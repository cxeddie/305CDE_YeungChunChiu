var map;
function init1() {
  var mapOptions = {
  zoom: 15,
  center: new google.maps.LatLng(22.1953574,113.9843994),
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map_canvas1'),
  mapOptions);
}
google.maps.event.addDomListener(window, 'load', init1);

function init2() {
  var mapOptions = {
  zoom: 15,
  center: new google.maps.LatLng(22.2559406,114.0304524),
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map_canvas2'),
  mapOptions);
}
google.maps.event.addDomListener(window, 'load', init2);

function init3() {
  var mapOptions = {
  zoom: 15,
  center: new google.maps.LatLng(22.2780249,114.167439),
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map_canvas3'),
  mapOptions);
}
google.maps.event.addDomListener(window, 'load', init3);

function init4() {
  var mapOptions = {
  zoom: 15,
  center: new google.maps.LatLng(22.3271855,114.222406),
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map_canvas4'),
  mapOptions);
}
google.maps.event.addDomListener(window, 'load', init4);