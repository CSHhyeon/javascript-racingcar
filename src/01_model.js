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

}