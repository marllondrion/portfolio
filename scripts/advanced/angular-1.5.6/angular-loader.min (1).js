/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(){'use strict';function d(b){return function(){var a=arguments[0],e;e="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.5.6/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){e=e+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,c;c=arguments[a];c="function"==typeof c?c.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof c?"undefined":"string"!=typeof c?JSON.stringify(c):c;e+=d(c)}return Error(e)}}(function(b){function a(c,a,b){return c[a]||(c[a]=b())}var e=d("$injector"),n=d("ng");
b=a(b,"angular",Object);b.$$minErr=b.$$minErr||d;return a(b,"module",function(){var c={};return function(b,d,h){if("hasOwnProperty"===b)throw n("badname","module");d&&c.hasOwnProperty(b)&&(c[b]=null);return a(c,b,function(){function c(a,b,d,e){e||(e=f);return function(){e[d||"push"]([a,b,arguments]);return g}}function a(c,e){return function(a,d){d&&"function"===typeof d&&(d.$$moduleName=b);f.push([c,e,arguments]);return g}}if(!d)throw e("nomod",b);var f=[],k=[],l=[],m=c("$injector","invoke","push",
k),g={_invokeQueue:f,_configBlocks:k,_runBlocks:l,requires:d,name:b,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:c("$provide","value"),constant:c("$provide","constant","unshift"),decorator:a("$provide","decorator"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),component:a("$compileProvider","component"),config:m,run:function(a){l.push(a);
return this}};h&&m(h);return g})}})})(window)})(window);
//# sourceMappingURL=angular-loader.min.js.map
