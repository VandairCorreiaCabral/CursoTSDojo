// funções nomais
function myfunction(salario, nome) {
    if (salario === void 0) { salario = 0; }
    console.log("o nome \u00E9:" + nome + " e o salario \u00E9 " + salario);
}
myfunction(120, "joaquim");
myfunction(300);
myfunction();
//funcoes anonimas não tem nome e so pode ser chamada apartir de uma variavel
var f = function (salario, nome) {
    if (salario === void 0) { salario = 0; }
    console.log("o nome \u00E9:" + nome + " e o salario \u00E9 " + salario);
};
f(154, "perue");
f(154);
f();
//arraw function é o mesmo que expressão lambda
var c = function (salario, nome) {
    if (salario === void 0) { salario = 0; }
    return console.log("o nome \u00E9:" + nome + " e o salario \u00E9 " + salario);
};
var d = function () { return 5 + 3; };
var e = function () { return 35 + 2; };
var u = function (salario, nome) {
    if (salario === void 0) { salario = 0; }
    console.log("o nome \u00E9:" + nome + " e o salario \u00E9 " + salario);
};
c(154, "");
d();
e();
u();
