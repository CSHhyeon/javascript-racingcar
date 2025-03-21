import { Car } from "./Car.js";

export class RacingGame {
  constructor() {
    this.carList = [];
  }

  setCars(nameList) {
    this.carList = nameList.map((name) => new Car(name));
  }

  getRaceResult() {
    return this.carList.map(car => car.race());
  }

  getWinner() {
    const max = Math.max(...this.carList.map(car => car.totalDistance));
    return this.carList.filter(car => car.totalDistance === max).map(car => car.name);
  }
}