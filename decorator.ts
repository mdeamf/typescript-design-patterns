abstract class Car {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

class ModelS extends Car {
  public description = "Model S";

  public cost(): number {
    return 73000;
  }
}

class ModelX extends Car {
  public description = "Model X";

  public cost(): number {
    return 77000;
  }
}

abstract class CarOptions extends Car {
  decorateCar: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
  decorateCar: Car;

  constructor(car: Car) {
    super();
    this.decorateCar = car;
  }

  public getDescription(): string {
    return this.decorateCar.getDescription() + ", Enhanced AutoPilot";
  }
  public cost(): number {
    return this.decorateCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarOptions {
  decorateCar: Car;

  constructor(car: Car) {
    super();
    this.decorateCar = car;
  }

  public getDescription(): string {
    return this.decorateCar.getDescription() + ", Rear Facing Seats";
  }
  public cost(): number {
    return this.decorateCar.cost() + 4000;
  }
}

let myTesla = new ModelS();
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutoPilot(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());