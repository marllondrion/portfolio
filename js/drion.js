

var app = angular.module('drionApp', ['pascalprecht.translate', 'ngSanitize']);


app.config(function ($translateProvider) {

	angular.lowercase = angular.$$lowercase;
	$translateProvider.translations("en", locale_en);
	$translateProvider.translations("pt", locale_pt);

	// Enable escaping of HTML
	$translateProvider.useSanitizeValueStrategy('escapeParameters');

	//Browser Language as preferred of Language
	shortLang = getBrowserLanguage().shortLang;
	$translateProvider.preferredLanguage(shortLang !== 'en' && shortLang !== 'pt'?'en':shortLang);
});

app.config(['$qProvider', function ($qProvider) {
	$qProvider.errorOnUnhandledRejections(false);
}]);

app.config(['$compileProvider', function ($compileProvider) {
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|skype|tel):/);
}
]);

/**
 * html safe - it is a way a found to habilitation the fuction of htmlSafe
 * Way to use
 * <span data-ng-bind-html="'translate.key' | translate | htmlSafe"></span>
 */
app.filter("htmlSafe", ['$sce', function ($sce) {
	return function (htmlCode) {
		return $sce.trustAsHtml(htmlCode);
	};
}]);
 
app.controller('drionController', function ($scope, $window, $translate) {
	var language = $translate.use();
	$scope.info = eval('curriculo_'+language);
	$scope.language = language;
	$scope.date = new Date();
	$scope.getYeardate = (new Date()).getFullYear();
	$scope.titleChange = "";

	$scope.changeLanguage = function () {
		var newLanguage = $scope.language == "en"? "pt": "en";
		$translate.use(newLanguage);
		$scope.titleChange = changeTitle();
		$scope.info = eval('curriculo_'+newLanguage);
		$scope.language  = newLanguage;
	};

	$scope.formartDate = function(date, format){
		const dt = new Date(date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));

		const year = new Intl.DateTimeFormat($translate.use(), { year: 'numeric' }).format(dt);
		const month = new Intl.DateTimeFormat($translate.use(), { month: '2-digit' }).format(dt);
		const day = new Intl.DateTimeFormat($translate.use(), { day: '2-digit' }).format(dt);
		const monthLong = new Intl.DateTimeFormat($translate.use(), { month: 'long' }).format(dt);
		const monthShort = new Intl.DateTimeFormat($translate.use(), { month: 'short' }).format(dt);

		if (format === "dd/mm/yyyy" || format == undefined)
			return `${day}/${month}/${year}`.replace('.', '').toUpperCase();
		if (format === "mm/yyyy")
			return `${monthShort}/${year}`.replace('.', '').toUpperCase();
		if (format === "month/yyyy")
			return `${monthLong}/${year}`.replace('.', '').toUpperCase();
	};

	$($window).bind('hashchange', function () {
		$scope.titleChange = changeTitle();
		$scope.$apply();
	});


	$($window).bind('DOMContentLoaded', function () {
		$scope.titleChange = changeTitle();
		$scope.$apply();
	});

	function changeTitle() {
		var value = getHashUrl();
		if (!anchorsMap.has(value) || value=='home') {
			return '';
		}
		return $translate.instant(anchorsMap.get(value));
	}
});


function getHashUrl() {
	return location.hash.slice(1);
}

function getBrowserLanguage() {
	let lang = window.navigator.languages ? window.navigator.languages[0] : null;
	lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

	let shortLang = lang;
	if (shortLang.indexOf('-') !== -1)
		shortLang = shortLang.split('-')[0];

	if (shortLang.indexOf('_') !== -1)
		shortLang = shortLang.split('_')[0];

	return {
		'language': lang,
		'shortLang': shortLang
	};
}


$('#sendEmail').on('submit', function(event) {
    event.preventDefault(); 
    var formData = new FormData(this);
	formData.append('service_id', 'service_yoaupqt');
	formData.append('template_id', 'mytemplate');
	formData.append('user_id', 'user_09W5AKhTNs4yJGgPOnnbj');

	$.ajax('https://api.emailjs.com/api/v1.0/email/send-form/', {
		type: 'POST',
		data: formData,
		contentType: false, // auto-detection
		processData: false // no need to parse formData to string
	}).done(function () {
		var msg = $('#success-message').val();
		msg = msg.format(formData.get('name'))
		alert(msg);
	}).fail(function (error) {
		var msg = $('#error-message').val();
		msg = msg.format(formData.get('name'))
		alert(msg);
		console.error(JSON.stringify(error));
	});
});



var requireConfig = {
	paths: {
		'recaptcha': '//www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit'
	}
  };
  function render(id) {
	  recaptchaClientId = grecaptcha.render(id, {
		  'sitekey': '6LfI99UZAAAAAGaxMROU_z1VAhPoYB8iJvfsLMY-',
		  'callback': verifyCallback,
		  'theme': 'light'
	  });
  }
  window.renderRecaptcha = render;
  var onloadCallback = function() {
	if (!document.getElementById('g-recaptcha')) {
	  return;
	}
	window.renderRecaptcha('g-recaptcha');
  };
  requirejs.config(requireConfig);
  require(['jquery','recaptcha'], function(recaptcha) {
  
  });
  var verifyCallback = function (response) {
	  jQuery("#btnSend").removeClass('disabled'); 
  };

