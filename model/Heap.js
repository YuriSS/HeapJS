

var HeapTree = function() {
	this.length = 0;


	this.push = function(nodo, props, callback) {
		var node = this.length++;
		if(props['prioridade']) {
			this[node] = nodo;
			this[node].prioridade = props['prioridade'];
			this.heapUp(node, (props['compara'] || this.comparaDefault), callback);
			return ;
		}
		return console.error('É preciso passar atributo de prioridade.');
	};
};

HeapTree.prototype.troca = function(node, parentNode, callback) {
	var aux = this[node];
	this[node] = this[parentNode];
	this[parentNode] = aux;
	callback();
};

HeapTree.prototype.comparaDefault = function(node1, node2) {
	return node1 > node2;
};

HeapTree.prototype.heapUp = function(index, compara, callback) {
	if(index > 0) {
		var parentNode = Math.floor((index - 1) / 2);
		if(compara(this[index].prioridade, this[parentNode].prioridade)) {
			this.troca(index, parentNode, function() {
				return this.heapUp(parentNode, compara, callback);
			}.bind(this));
		}
	}
	return callback ? callback() : callback;
};



var Heap = function() {
	var heapTree = new HeapTree();

	this.push = function(nodo, props, callback) {
		heapTree.push(nodo, props, callback);
	};

	this.getHeapTree = function() {
		return heapTree;
	};
};



module.exports = Heap;