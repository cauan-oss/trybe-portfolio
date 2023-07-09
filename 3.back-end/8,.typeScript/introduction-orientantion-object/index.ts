 /* o primeiro conceito sao as classes serve para determinar algo generico 
 ex: cachorro, pessoas, carros
 */

 class person {
    name: string;
    height: number;
    weight?: number; // o caractere ? indica um atributo opcional 
    // o metodo contructor invocamos eles todas vez que criamos um objeto
    constructor(n: string, h: number, w?: number) {
        this.name = n;
        this.height = h;
        this.height = w?;
    }
 }; 
// objetos
 const p1 =  new person('cauan', 179, 70);
 const p2 = new person('lavinia', 169, 56);

 // acesso ao atributos
 console.log(`altura do usuario1 ${p1.height}, altura do usuario2 ${p2.height}`);

 // atividade 1
 class tv {
    brand: string;
    size: number;
    resolution: number;
    connection: string;

    constructor(b: string, s: number, r: number, c: string ) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connection = c;
    }

    turnOn:void {
        
    }
 }
