var Node = require('./model/Node');

var yuri = new Node({
	nome: 'Yuri',
	email: 'yuri@gmail.com',
	tel: '82401028'
});


yuri.printProp(function(prop, value) {
	console.log(prop + ': ' + value);
});