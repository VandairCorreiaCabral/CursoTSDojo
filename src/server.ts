
class myclass {

    
 private _nome : string;
 public get nome() : string {
     return this._nome;
 }
 public set nome(v : string) {
     this._nome = v;
 }

 
 private _salario : number;
 public get salario() : number {
     return this._salario;
 }
 public set salario(v : number) {
     this._salario = v;
 }
 
 constructor(nome: string, salario: number) {
    this._nome = nome;
    this._salario = salario;
    
}



}

let cla = new myclass('jose', 154);
let cla1 = <myclass>{};
console.log(cla);

cla1.nome = "tudo bem";

console.log(cla1);
console.log(cla1.nome, cla1.salario);