var Node = require('./model/Node');
var Heap = require('./model/Heap');


Node.prototype.fala = function(msg) {
	return this.get('nome') + ' diz: ' + msg;
};



var myHeap = new Heap();
var nodos = [
	new Node({
		nome: 'Teste 2',
		prioridade: 2
	}),
	new Node({
		nome: 'Teste 7',
		prioridade: 7
	}),
	new Node({
		nome: 'Teste 26',
		prioridade: 26
	}),
	new Node({
		nome: 'Teste 25',
		prioridade: 25
	}),
	new Node({
		nome: 'Teste 19',
		prioridade: 19
	}),
	new Node({
		nome: 'Teste 17',
		prioridade: 17
	}),
	new Node({
		nome: 'Teste 1',
		prioridade: 1
	}),
	new Node({
		nome: 'Teste 90',
		prioridade: 90
	}),
	new Node({
		nome: 'Teste 3',
		prioridade: 3
	}),
	new Node({
		nome: 'Teste 36',
		prioridade: 36
	}),
];


for(var i=0; i<nodos.length; i++) {
	myHeap.push(nodos[i], {
		prioridade: nodos[i].get('prioridade'),
	});
}


Array.prototype.forEach.call(myHeap.getHeapTree(), function(elem, index) {
	elem.printProp(function(prop, value) {
		console.log(prop + ': ' + value);
	});
	console.log(elem.fala('Eu sou da posição: ' + index));
});