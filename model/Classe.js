

var Classe = function() {

	this.getMetodos = function(propriedades) {
		for(var prop in propriedades) {
			(function(i) {
				this['get' + i] = function() {
					return propriedades[i];
				};
			}.bind(this))(prop);
		}
	};

};
Classe.prototype.get = function(prop) {
	if(this['get' + prop]) {
		return this['get' + prop]();
	};
	return console.error('Propriedade '+ prop +' inexistente no objeto para fazer um get.');
};


module.exports = Classe;