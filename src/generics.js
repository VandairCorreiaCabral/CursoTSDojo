//exemplo de uma funcao normal usando genererics
function reverseList(lista) {
    //recebe um parametro vetor do tipo <T> generico, que retornat um outro  vetor do tipo <T> generico 
    var reversedList = []; //variavel definida com tipo array de T inicializada com array vazio
    for (var i = lista.length - 1; i >= 0; i--) { // loop que conta de traz para frente
        reversedList.push(lista[i]); // acrescenta o iten ao vedor 
    }
    return reversedList; // funcao retorna o array invertido
}
var names = ["toxa humana", "o coisa", "homem aranha", "thor"]; // declara uma variavel e atribui um array de string a ela
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // declra uma variavel e atribui um array de numeros a ela
var reversedNames = reverseList(names); // declara uma variavel que recebe o retorno da função generica.
// aqui na chamada da funcçãoi é atribuido o tipo do generico e passado o parametro para a função generica
var reversedNumeros = reverseList(numeros); // declara uma variavel que recebe o retorno da função generica.
//aqui na chamada da função é atribuido o tipo do generico e passado o parametro para a função geneerica
console.log(reversedNames);
console.log(reversedNumeros);
//**********exemplo de uma função errow function usando generics */
var reversedListArrow = function (lista) {
    //recebe um parametro vetor do tipo <T> generico, que retornat um outro  vetor do tipo <T> generico 
    var reversedList = []; //variavel definida com tipo array de T inicializada com array vazio
    for (var i = lista.length - 1; i >= 0; i--) { // loop que conta de traz para frente
        reversedList.push(lista[i]); // acrescenta o iten ao vedor 
    }
    return reversedList; // funcao retorna o array invertido
};
console.log(reversedListArrow(names));
/************exemplo de implemetação de repositorio com usando generics
*** com interface e clarres */
var person3 = /** @class */ (function () {
    function person3(name) {
        this._name = name;
    }
    person3.prototype.print = function () {
        console.log("nome: " + this._name);
    };
    Object.defineProperty(person3.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    return person3;
}());
var PersonRepository = /** @class */ (function () {
    function PersonRepository() {
    }
    PersonRepository.prototype.FindById = function (id) {
        console.log("serching for ID:" + id);
        return new person3('meu nome');
    };
    PersonRepository.prototype.save = function (entity) {
        return new person3('meu baballooo');
        ;
    };
    return PersonRepository;
}());
var pRepository = new PersonRepository();
console.log(pRepository.FindById(3));
console.log(new person3("fui no tororo"));
