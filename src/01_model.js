export class Car {
  constructor() {
    this.carList = [];
  }

  // Car 객체 생성 & carList에 추가
  saveCar(nameList) {
    this.carList = nameList.map((name) => (
      {
        name,
        doMoveForward: false,
        movedDistance: 0,
        totalDistance: 0
      }
    ));
  }

  // 자동차 객체 리스트 반환 (원본 보호를 위해 복사해서 반환하는 것을 선택함)
  getCars() {
    return [...this.carList];
  }

  // 자동차 이름 입력 받아 array 반환
  splitNameInput(input) {
    const nameList = input.split(",").map(name => name.trim());
    return nameList;
  }

  // 자동차 이름 입력값 검증 (하나라도 6글자 이상이면 false)
  isValidName(nameList) {
    return nameList.every(name => name.length < 6);
  }

  /* 이 아래는 시도 횟수 입력칸 관련된 부분 */

  // 시도 횟수 입력값 검증 (정수인지, 0 이상인지 확인)
  isValidCount(count) {
    return Number.isInteger(count) && (count > 0);
  }

  // 차 하나하나마다 조건에 맞으면 전진 (무작위 값이 4 미만이면 전진 X)
  moveDistance() {
    for(let car of this.carList) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

      if (randomNumber < 4) {
        car.doMoveForward = false;
        car.movedDistance = 0;
      } else {
        console.log("upper 4")
        car.doMoveForward = true;
        car.movedDistance = randomNumber;
        car.totalDistance += randomNumber;
      }
    }
  }

  // 출력할 값 생성
  returnMovedForward() {
    let resultList = [];
    
  }

  // 우승자 출력
  showWinner() {}
}