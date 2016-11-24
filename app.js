var spotifyApp =
  angular.module('spotifyApp', []);

// $http is an agular service (already included in core angular)
// $scope and $http are automatically injected by Angular
// For more information, look for: Dependency injection
spotifyApp.controller('SpotifyController', function($scope, $http) {

	// $scope is an object where we can put any data
	// that we want to display in HTML
	$scope.person = {
		name: "Ferran",
		city: "Barcelona"
	};

	$scope.message = "Message from JavaScript file";

	$scope.changeMessage = function() {
		// This change will be immediately reflected in the HTML
		$scope.message = "Message changed!";
	};

    // See doc: https://developer.spotify.com/web-api/
	var spotifyAPI = "https://api.spotify.com/v1/";

	$scope.searchArtist = function() {

		var query = $scope.query;

		// See doc: https://developer.spotify.com/web-api/search-item/
		// Example: https://api.spotify.com/v1/search?q=bjork&type=artist
		var url = spotifyAPI + "search?q=" + query + "&type=artist";

		// This is similar to jQuery ajax
		$http({
		  method: 'GET',
		  url: url
		}).then(function(response) {

		    // ok
		    var artists = response.data.artists.items;
		    fillArtistsImage(artists);
		    $scope.artists = artists;

		}, function(response) {
			
		    // error
		    console.error(response);
		});
	};
});


// Auxiliary functions

function fillArtistsImage(artists) {

	// set artist.image, fill empty images with placeholder
	artists.forEach(function (artist) {
		if (artist.images.length > 0) {
			artist.image = artist.images[0].url;
		} else {
			artist.image = "http://www.aspirehire.co.uk/aspirehire-co-uk/_img/profile.svg";
		}
	});	
}
