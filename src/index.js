import { Car } from "./model/RacingCar.js";
import { RacingCarView } from "./view/RacingCarView.js";
import { RacingCarController } from "./controller/RacingCarController.js";

// 초기화
const model = new Car();
const view = new RacingCarView();
new RacingCarController(model, view);
