/**	function whatIsIdioma(){
		var url = (window.location).toString().toLowerCase();
		if(url.indexOf("lang=pt") > -1)
		{	return "pt";
		}
		return "en";		
	}	
	function idioma(){
		var url = (window.location).toString().toLowerCase();
		if(url.indexOf("/en/") > -1)
		{	window.location = url.replace('/en/','/pt/');
		}else if(url.indexOf("/pt/") > -1)
		{	window.location = url.replace('/pt/','/en/');
		}	
	}
**/
	
var app = angular.module('drionApp', []);
app.controller('drionController', function($scope, $http, CurriculoService) {
	$scope.info = CurriculoService;
	
});


app.controller('drionController', function($scope, $http, CurriculoService) {
	//funciona
	//$http.get("http://www.w3schools.com/angular/customers.php")
    //.success(function(response) {$scope.names = response.records;
	//alert(response.records[0].Name);	
	//});
			
	$scope.info = CurriculoService;
	$scope.date = new Date();
	console.log('CurriculoService' + CurriculoService);
		
});

// entre a assinatura do metodo drein controle ['$scope','$http',

app.service('CurriculoService', function () {

	return {
		'addCurriculo': function (informacao) {
			this.curriculo.push(informacao);
		},
		'selectedCurriculo': null,
		'curriculo': variavel_curriculo_en
		

	};
});
