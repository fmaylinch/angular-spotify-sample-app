var spotifyApp =
  angular.module('spotifyApp', []);

spotifyApp.controller('SpotifyController', function($scope) {

	$scope.person = {
		name: "Ferran",
		city: "Barcelona"
	};

	$scope.message = "Message from JavaScript file";

	$scope.changeMessage = function() {
		// will be executed when the button is clicked
		$scope.message = "Message changed!";
	};

	$scope.artists = [
		{ name:"Radiohead", style:"Rock" },
		{ name:"Enigma", style:"New age" },
		{ name:"Coldplay", style:"Pop rock" }
	];
});