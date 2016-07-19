var app = angular.module("myApp", ["ngTable"]);

app.controller("myController", myController);

myController.$inject = ["NgTableParams", "$http"];

function myController(NgTableParams, http) {
	var self = this;
	self.tableParams = new NgTableParams({}, {
		getData: function(params) {
			return http({
				  method: 'GET',
				  url: '/data'
				}).then(function successCallback(response) {
					console.log(response);
					return response.data;
				  }, function errorCallback(response) {
				  	console.log(response);
				    // called asynchronously if an error occurs
				    // or server returns response with an error status.
				    return;
			});
		}
	});
}