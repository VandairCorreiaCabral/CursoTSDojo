
//exemplo de uma funcao normal usando genererics
function reverseList<T>(lista:Array<T>):Array<T>{//funnção  é generica do tipo gernerico <T> ,
   //recebe um parametro vetor do tipo <T> generico, que retornat um outro  vetor do tipo <T> generico 
   let reversedList : T[] = [];  //variavel definida com tipo array de T inicializada com array vazio
for( let i = lista.length - 1; i >= 0;i--){ // loop que conta de traz para frente
  reversedList.push(lista[i]); // acrescenta o iten ao vedor 
}
return reversedList; // funcao retorna o array invertido
}
let names = ["toxa humana","o coisa","homem aranha","thor"]; // declara uma variavel e atribui um array de string a ela
let numeros = [1,2,3,4,5,6,7,8,9,10]; // declra uma variavel e atribui um array de numeros a ela
let reversedNames = reverseList<string>(names); // declara uma variavel que recebe o retorno da função generica.
// aqui na chamada da funcçãoi é atribuido o tipo do generico e passado o parametro para a função generica
let reversedNumeros = reverseList<number>(numeros);// declara uma variavel que recebe o retorno da função generica.
//aqui na chamada da função é atribuido o tipo do generico e passado o parametro para a função geneerica

console.log(reversedNames);
console.log(reversedNumeros);

//**********exemplo de uma função errow function usando generics */
let reversedListArrow = <T>(lista:Array<T>):Array<T> =>{//funnção  é generica do tipo gernerico <T> ,
  //recebe um parametro vetor do tipo <T> generico, que retornat um outro  vetor do tipo <T> generico 
  let reversedList : T[] = [];  //variavel definida com tipo array de T inicializada com array vazio
  for( let i = lista.length - 1; i >= 0;i--){ // loop que conta de traz para frente
    reversedList.push(lista[i]); // acrescenta o iten ao vedor 
  }
return reversedList; // funcao retorna o array invertido
}
console.log(reversedListArrow(names));

/************exemplo de implemetação de repositorio com usando generics
*** com interface e clarres */
class person3{
  private _name:string;
  constructor(name:string){
    this._name = name;
    }
    print():void{ // metodo nao retorna nada apenas escreve no consoloe
      console.log(`nome: ${this._name}`);
    }
    
    public get name() : string { // propriedade name encapsula _name e retorna ele mesmo
      return this._name;
    }
    public set name(v : string) { //propriedade name encapsula _name e recebe V(valor passado)
      this._name = v;
    }
    
}
interface IRepository<T,ID>{  // interface d eum repositorio qualquer que recebe um generico e um numero
  FindById(id:ID):T;// metodo a ser implementando na classe a ser extentdida recebe um number como parametro e retornar um tipo generico T
  save(entity:T):T; // metodo a ser implementado na classe a ser extendida recebe um model do tipo generico T
}
class PersonRepository implements IRepository<person3,number>{// classe qeu implementa a interface
  FindById(id: number): person3 {
    console.log(`serching for ID:${id}`);
    return new person3('meu nome');
  }
  save(entity: person3): person3 {
    return new person3('meu baballooo');;
  }
 
}
let pRepository = new PersonRepository();
console.log(pRepository.FindById(3));
console.log(pRepository.save(new person3("fui no tororo")));

//limitando os generics com inteface

interface INumberId{
    id:number;
}
interface IRepository2<T,ID extends INumberId>{
  FindById(id:ID):T;
  save(entity:T):T;
}

class PersonRepository2 implements IRepository2<person3,INumberId>{
  FindById(INumberId: INumberId): person3 {
    console.log(`serching for ID:${INumberId.id}`);
    return new person3('meu nome');
  }
  save(entity: person3): person3 {
    return new person3('meu baballooo');;
  }
 
}
let pRepository2 = new PersonRepository2();
console.log(pRepository2.FindById({id:2}));



