// funções nomais
function myfunction(salario:number= 0,nome?:string){
  console.log(`o nome é:${nome} e o salario é ${salario}`);

}

myfunction(120,"joaquim");
myfunction(300);
myfunction();


//funcoes anonimas não tem nome e so pode ser chamada apartir de uma variavel
let f = function(salario:number= 0,nome?:string){
    console.log(`o nome é:${nome} e o salario é ${salario}`);
}
f(154,"perue")
f(154);
f();

//arraw function é o mesmo que expressão lambda

let c = (salario:number= 0,nome?:string) => console.log(`o nome é:${nome} e o salario é ${salario}`);
let d = ()=> 5+3;
let e = ()=> {return 35+2};
let u = (salario:number= 0,nome?:string) =>{
  console.log(`o nome é:${nome} e o salario é ${salario}`);
}

c(154,"");
d();
e();
u();