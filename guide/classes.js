var Item;
(function (Item) {
  var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
      this.horsePower = horsePower;
      this.engineType = engineType;
    }
    return Engine;
  })();
  Item.Engine = Engine;
  var Car = /** @class */ (function () {
    function Car(engine) {
      this.engine = engine;
    }
    Car.prototype.getEngine = function () {
      return this.engine;
    };
    Car.prototype.setEngine = function (value) {
      this.engine = value;
    };
    Car.prototype.getEngineType = function () {
      return this.engine.engineType;
    };
    return Car;
  })();
  Item.Car = Car;
})(Item || (Item = {}));
var engine = new Item.Engine(300, "V8");
var car = new Item.Car(engine);
console.log(car.getEngineType());
console.log(car.getEngine().engineType);
car.setEngine(new Item.Engine(300, "V9"));
console.log(car.getEngineType());
console.log(car.getEngine().engineType);
