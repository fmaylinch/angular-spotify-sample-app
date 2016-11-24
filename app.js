var spotifyApp =
  angular.module('spotifyApp', []);

spotifyApp.controller('SpotifyController', function($scope) {

	var person = {
		name: "Ferran",
		age: 39
	};

	person.city = "Barcelona";

	$scope.message = "Message from JavaScript file";
	$scope.person = person;
});