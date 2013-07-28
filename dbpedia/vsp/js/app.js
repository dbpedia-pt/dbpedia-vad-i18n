var dbpv = angular.module('dbpv', ['dbpvServices']);
/*dbpv.config(function($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider.
			when('/', {templateUrl: 'tpl/list.html', controller: ListCtrl}).
			when('/entity/:id', {templateUrl: 'tpl/entity.html', controller: EntityCtrl}).
			when('/search/:id', {templateUrl: 'tpl/search.html', controller: SearchCtrl}).
			otherwise({redirectTo: '/'});
	});

*/
dbpv.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/page/:id', {templateUrl: '/tpl/entity.html', controller: EntityCtrl})
		.when('/resource/:id', {redirectTo: function(params, path, seach) {return '/page/'+params.id;} })
		.otherwise({redirectTo: '/page/404'});
});

dbpv.directive("whenScrolled", function() {
	return function(scope, elm, attr) {
		var raw = elm[0];
		var margin = 1000;
		
		elm.bind("scroll", function() {
			if (raw.scrollTop + raw.offsetHeight + margin >= raw.scrollHeight) {
				scope.$apply(attr.whenScrolled);
			}
		});
	};
});

