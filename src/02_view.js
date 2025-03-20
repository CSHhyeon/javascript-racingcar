// View: 사용자 인터페이스 및 DOM 조작
export class RacingCarView {
  constructor() {
    this.nameInput = document.querySelector("#car-names-input");
    this.nameSubmit = document.querySelector("#car-names-submit");
    this.countInput = document.querySelector("#racing-count-input");
    this.countSubmit = document.querySelector("#racing-count-submit");

    // 최종 우승자 h4 태그
    this.winnerH4 = document.querySelector("#racing-winners").parentElement;
    this.makeNewDiv();

    this.raceResults = document.querySelector("#race-results");
  }

  // 레이싱 카 이름 입력값 반환
  getNameInput() {
    return this.nameInput.value;
  }

  // 이름 제출 버튼 이벤트 핸들러 바인딩
  bindNameSubmit(handler) {
    this.nameSubmit.addEventListener("click", handler);
  }

  // 실행 결과, 최종 우승자 사이에 div 생성
  makeNewDiv() {
    const newDiv = document.createElement("div");
    newDiv.id = "race-results";

    this.winnerH4.parentNode.insertBefore(newDiv, this.winnerH4);
  }

  // 시도 횟수 당 실행 결과 반환
  showRaceResult(race) {
    race.forEach((result) => {
      const textNode = document.createTextNode(result);
      const br = document.createElement("br");
      this.raceResults.appendChild(textNode);
      this.raceResults.appendChild(br);
    });
    
    this.raceResults.appendChild(document.createElement("br"));
  }

  // 시도 횟수 입력값 반환
  getCountInput() {
    return this.countInput.value;
  }

  // 시도 횟수 버튼 이벤트 핸들러 바인딩
  bindCountSubmit(handler) {
    this.countSubmit.addEventListener("click", handler);
  }

  // 시도 횟수 입력칸 & 확인 버튼 비활성화
  disableCount() {
    this.countInput.disabled = true;
    this.countSubmit.disabled = true;
  }

  // 시도 횟수 입력칸 & 확인 버튼 활성화
  enableCount() {
    this.countInput.disabled = false;
    this.countSubmit.disabled = false;
  }
}