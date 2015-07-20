var Classe = require('./Classe');


var Node = function(propriedades) {
	this.getMetodos(propriedades);

	this.printProp = function(callback) {
		for(var i in propriedades) {
			callback(i, this.get(i));
		}
	};

};
Node.prototype = new Classe();


module.exports = Node;