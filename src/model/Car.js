export class Car {
  constructor(name) {
    this.name = name;
    this.totalDistance = 0;
  }

  // 무작위 값이 4 미만이면 전진 X, 4 이상이면 전진 & totalDistance 값 추가
  race() {
    const rand = MissionUtils.Random.pickNumberInRange(0, 9);

    if (rand < 4) {
      return `${this.name}: `;
    } else {
      this.totalDistance += rand;
      return `${this.name}: ${"-".repeat(rand)}`;
    }
  }
}