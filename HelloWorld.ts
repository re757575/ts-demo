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
  protected age: number;

  constructor(name, age) {
    super(name);
    this.name = name;
    this.age = age;
  }

  public sing(song: string): string {
    return `${this.cName}: ${this.name} sing ${song}`;
  }
}

People.sayHelloWorld();
Singer.sayHelloWorld();

const Alex = new People('Alex');
console.log(Alex.greeting());

const Ai = new Singer('Ai', 18);
console.log(Ai.greeting());
console.log(Ai.sing('ABC'));

// instanceof
console.log('------instanceof------');
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

// hasOwnProperty
console.log('------hasOwnProperty------');
// true
console.log(`Alex hasOwnProperty name: ${Alex.hasOwnProperty('name')}`);
// false 因為 greeting 繼承 prototype
console.log(`Alex hasOwnProperty greeting: ${Alex.hasOwnProperty('greeting')}`);
console.log(`Alex hasOwnProperty age: ${Alex.hasOwnProperty('age')}`);

// true
console.log(`Ai hasOwnProperty name: ${Ai.hasOwnProperty('name')}`);
// true
console.log(`Ai hasOwnProperty age: ${Ai.hasOwnProperty('age')}`);
