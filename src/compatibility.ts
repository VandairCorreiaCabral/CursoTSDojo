//compatibilidade para variaveis , interface e classes
interface exemple{
  nome:string;
}
class AnotherExemple{
  age:number = 123;
  nome:string = "valdomiro";
}
class AnotherExemple1{
  age:number = 54;
}
let exVar : exemple;
exVar = new AnotherExemple();
let exvar2 = {nome:"jose te melo rego", age:254}
exVar = exvar2; // aqui é aceito a atribuição  pois a atribuição não é literal
//exVar = {nome:"jose te melo rego", age:254} // aqui a tribução é literal e não é permitido.

//compatibilidade para funcoes.
function testExemple1(obj:exemple){
console.log(obj.nome);
}
let exvar3 = {nome:"jose te melo rego", age:254}
testExemple1(exvar3); //aceita pois a passagem do parametro não literal
//testExemple1({nome:"jose te melo rego", age:254}); // aceita pois a passagem do parametro ée literal

let x1 = (a:number)=> a;
//let x2 = (b:string,a:number)=> b + a ;
let x2 = (c:number, b:string)=> c ;
console.log(x1(10));
console.log(x2(15,"josefina"));
x2 = x1; // foi possivel pois nao estamos usando o arqumento string no retorno
//x1=x2; // não foi possivel pois a função x1 é menor que x2