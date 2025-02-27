// Construtor para o objeto Telefone
function Telefone(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
}

// Métodos para acessar e modificar os atributos do Telefone
Telefone.prototype.getDdd = function() { return this.ddd; };
Telefone.prototype.setDdd = function(ddd) { this.ddd = ddd; };

Telefone.prototype.getNumero = function() { return this.numero; };
Telefone.prototype.setNumero = function(numero) { this.numero = numero; };

Telefone.prototype.toUpperCase = function() {
    return { ddd: this.ddd.toUpperCase(), numero: this.numero.toUpperCase() };
};

Telefone.prototype.toLowerCase = function() {
    return { ddd: this.ddd.toLowerCase(), numero: this.numero.toLowerCase() };
};

// Construtor para o objeto Endereco
function Endereco(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
}

// Métodos para acessar e modificar os atributos do Endereco
Endereco.prototype.getEstado = function() { return this.estado; };
Endereco.prototype.setEstado = function(estado) { this.estado = estado; };

Endereco.prototype.getCidade = function() { return this.cidade; };
Endereco.prototype.setCidade = function(cidade) { this.cidade = cidade; };

Endereco.prototype.getRua = function() { return this.rua; };
Endereco.prototype.setRua = function(rua) { this.rua = rua; };

Endereco.prototype.getNumero = function() { return this.numero; };
Endereco.prototype.setNumero = function(numero) { this.numero = numero; };

Endereco.prototype.toUpperCase = function() {
    return {
        estado: this.estado.toUpperCase(),
        cidade: this.cidade.toUpperCase(),
        rua: this.rua.toUpperCase(),
        numero: this.numero.toUpperCase()
    };
};

Endereco.prototype.toLowerCase = function() {
    return {
        estado: this.estado.toLowerCase(),
        cidade: this.cidade.toLowerCase(),
        rua: this.rua.toLowerCase(),
        numero: this.numero.toLowerCase()
    };
};

// Construtor para o objeto Cliente
function Cliente(nome, telefone, email, endereco) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;
}

// Método para obter a descrição formatada do Cliente
Cliente.prototype.getDescricao = function() {
    return `
========================
DADOS DO CLIENTE
Nome: ${this.nome}
========================
Telefone:
- DDD: ${this.telefone.getDdd()}
- Número: ${this.telefone.getNumero()}
------------------------
Endereço:
- Rua: ${this.endereco.getRua()}, Nº ${this.endereco.getNumero()}
- Cidade: ${this.endereco.getCidade()} - ${this.endereco.getEstado()}
========================`;
};

// Criando um cliente com telefone e endereço
let tel = new Telefone('12', '984129880');
let end = new Endereco('SP', 'São josé dos campos', 'Avenida São João', '123');
let cliente1 = new Cliente('Pedro', tel, 'pedro@gmail.com', end);

// Exibindo a descrição formatada
console.log(cliente1.getDescricao());
