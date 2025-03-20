// View: 사용자 인터페이스 및 DOM 조작
export class RacingCarView {
  constructor() {
    this.nameInput = document.querySelector("#car-names-input");
    this.nameSubmit = document.querySelector("#car-names-submit");
    this.countInput = document.querySelector("#racing-count-input");
    this.countSubmit = document.querySelector("#racing-count-submit");
  }

  // 레이싱 카 이름 입력값 반환
  getNameInput() {
    return this.nameInput.value;
  }

  // 이름 제출 버튼 이벤트 핸들러 바인딩
  bindNameSubmit(handler) {
    this.nameSubmit.addEventListener("click", handler);
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