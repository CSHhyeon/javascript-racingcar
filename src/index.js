import { Car } from "./01_model.js";
import { RacingCarView } from "./02_view.js";

// Controller: 모델과 뷰를 연결하여 이벤트 처리 및 로직 실행
class RacingCarController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.initialize();
  }

  initialize() {
    // 뷰의 이벤트와 컨트롤러의 핸들러 연결
    this.view.bindNameSubmit(this.handleNameSubmit.bind(this));
    this.view.bindCountSubmit(this.handleCountSubmit.bind(this));

    // 시도 횟수칸 비활성화
    this.view.disableCount();
  }
  
  // 이름 확인 버튼 클릭 시 처리
  handleNameSubmit(event) {
    event.preventDefault();
    const nameInput = this.view.getNameInput();

    // 이름 split & 길이 검증
    const nameList = this.model.splitNameInput(nameInput);
    if (!this.model.isValidName(nameList)) {
      alert("5자 이하로 입력하세요.");
      return;
    }

    // 검증되었으면 Car 객체 생성 & 배열에 추가
    this.model.saveCar(nameList);
    // 시도 횟수칸 활성화
    this.view.enableCount();
  }

  // 횟수 확인 버튼 클릭 시 처리
  handleCountSubmit(event) {
    event.preventDefault();
    let countInput = Number(this.view.getCountInput());

    // 시도 횟수 입력값 검증 (정수인지, 0 이상인지)
    if (!this.model.isValidCount(countInput)) {
      alert("0 이상의 정수를 입력하세요.");
      return;
    }

    // 입력받은 값만큼 전진 & 출력값 생성
    while(countInput > 0) {
      this.model.moveDistance();
      //this.model.showMovedForward();
      console.log(this.model.getCars());
      countInput--;
    }
    
    // 우승자 출력
    this.model.showWinner();
  }
}

// 초기화
const car = new Car();
const view = new RacingCarView();
const controller = new RacingCarController(car, view);
