window.onload= function(){
	getLoc = function(btn_press){
		lat = document.getElementById("lat");
		longi = document.getElementById("long");
		addr = document.getElementById("addr");

		btn_press.preventDefault();

		var country = document.getElementById('country').value;
		var postalcode = document.getElementById('postalcode').value;

		$.getJSON("http://nominatim.openstreetmap.org/search?format=json&country="+ country+"&postalcode="+postalcode, function( data ) {
		  lat.innerHTML = "<b>Latitude:</b> " + data[0].lat;
		  longi.innerHTML = "<b>Longitude:</b> " + data[0].lon;
		  addr.innerHTML = "<b>Address:</b> " + data[0].display_name;
		});
	}
	var btn = document.getElementById("search");
	btn.addEventListener('click', getLoc, false);
}