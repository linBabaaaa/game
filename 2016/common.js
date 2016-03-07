
place_with_id = function(id) {
	var places = game.world.places;
	var l = places.length;
	for(var i = 0; i < l; i++) {
		if(places[i].id == id) {
			return places[i];
		}
	}
	return null;
}


if(typeof process !== "undefined") {
	// node.js
	module.exports.place_with_id = place_with_id;
}

