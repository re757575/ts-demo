var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
        this.cName = this.constructor.name;
    }
    People.prototype.greeting = function () {
        return this.cName + ": Hello " + this.name;
    };
    People.sayHelloWorld = function () {
        console.log('People: Hello World');
    };
    return People;
}());
var Singer = /** @class */ (function (_super) {
    __extends(Singer, _super);
    function Singer(name, age) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Singer.prototype.sing = function (song) {
        return this.cName + ": " + this.name + " sing " + song;
    };
    return Singer;
}(People));
People.sayHelloWorld();
Singer.sayHelloWorld();
var Alex = new People('Alex');
console.log(Alex.greeting());
var Ai = new Singer('Ai', 18);
console.log(Ai.greeting());
console.log(Ai.sing('ABC'));
// instanceof
console.log('------instanceof------');
// Alex 為 People 的物件 ＝> true
console.log("Alex instanceof People: " + (Alex instanceof People));
// Alex 為 Singer 的物件 ＝> false
console.log("Alex instanceof Singer: " + (Alex instanceof Singer));
// Ai 為 Singer 的物件 ＝> true
console.log("Ai instanceof Singer: " + (Ai instanceof Singer));
// Ai 為 People 的物件 ＝> true
console.log("Ai instanceof People: " + (Ai instanceof People));
// Singer class 繼承 People class => true
console.log("Singer extends People: " + (Singer.prototype instanceof People));
// hasOwnProperty
console.log('------hasOwnProperty------');
// true
console.log("Alex hasOwnProperty name: " + Alex.hasOwnProperty('name'));
// false 因為 greeting 繼承 prototype
console.log("Alex hasOwnProperty greeting: " + Alex.hasOwnProperty('greeting'));
console.log("Alex hasOwnProperty age: " + Alex.hasOwnProperty('age'));
// true
console.log("Ai hasOwnProperty name: " + Ai.hasOwnProperty('name'));
// true
console.log("Ai hasOwnProperty age: " + Ai.hasOwnProperty('age'));
