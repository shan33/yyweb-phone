"use strict"

var Url = (()=>{
	function Url(){}
	Url.prototype.getUrl = ()=>{
		return "http://localhost:8080";
	};
})();

exports.Url = Url;