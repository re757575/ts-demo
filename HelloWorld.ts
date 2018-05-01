class People {
  protected name: string;
  protected cName: string;

  constructor(name) {
    this.name = name;
    this.cName = this.constructor.name;
  }

  public greeting(): string {
    return `${this.cName}: Hello ${this.name}`;
  }

  public static sayHelloWorld(): void {
    console.log('People: Hello World');
  }
}

class Singer extends People {
  constructor(name) {
    super(name);
    this.name = name;
  }

  public sing(song: string):string {
    return `${this.cName}: ${this.name} sing ${song}`;
  }
}

People.sayHelloWorld();

const Alex = new People('Alex');
console.log(Alex.greeting());

Singer.sayHelloWorld();
const Ai = new Singer('Ai');
console.log(Ai.greeting());
console.log(Ai.sing('ABC'));

// Alex 為 People 的物件 ＝> true
console.log(`Alex instanceof People: ${Alex instanceof People}`);
// Alex 為 Singer 的物件 ＝> false
console.log(`Alex instanceof Singer: ${Alex instanceof Singer}`);
// Ai 為 Singer 的物件 ＝> true
console.log(`Ai instanceof Singer: ${Ai instanceof Singer}`);
// Ai 為 People 的物件 ＝> true
console.log(`Ai instanceof People: ${Ai instanceof People}`);
// Singer class 繼承 People class => true
console.log(`Singer extends People: ${Singer.prototype instanceof People}`);

