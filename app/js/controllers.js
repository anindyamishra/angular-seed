'use strict';

/* Controllers */

angular.module('F1FeederApp.controllers', []).controller('driversController',
		function($scope, ergastAPIservice) {
			$scope.nameFilter = null;
			$scope.driversList = [];
			
			ergastAPIservice.getDrivers().success(function (res) {
				$scope.driversList = res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
			});
		});
