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
					// console.log(params.filter());
					params.total(response.data.length);
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

app.controller("myStaticController", myStaticController);

myStaticController.$inject = ["NgTableParams", "$http"];

function myStaticController(NgTableParams, http) {
	var self = this;

	http({
		  method: 'GET',
		  url: '/data'
	}).then(function successCallback(response) {
			self.tableParams = new NgTableParams({}, {
				dataset: response.data
			});
		  }, function errorCallback(response) {
		  	console.log(response);
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    return;
	});
}