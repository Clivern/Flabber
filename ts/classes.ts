namespace Item {
  export class Engine {
    constructor(public horsePower: number, public engineType: string) {}
  }

  export class Car {
    private engine: Engine;

    constructor(engine: Engine) {
      this.engine = engine;
    }

    getEngine(): Engine {
      return this.engine;
    }

    setEngine(value: Engine) {
      this.engine = value;
    }

    getEngineType(): string {
      return this.engine.engineType;
    }
  }
}

var engine = new Item.Engine(300, "V8");
var car = new Item.Car(engine);

console.log(car.getEngineType());
console.log(car.getEngine().engineType);

car.setEngine(new Item.Engine(300, "V9"));

console.log(car.getEngineType());
console.log(car.getEngine().engineType);
