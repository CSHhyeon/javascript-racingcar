import { RacingGame } from "./model/RacingGame.js"
import { RacingCarView } from "./view/RacingCarView.js";
import { RacingCarController } from "./controller/RacingCarController.js";

// 초기화
const model = new RacingGame();
const view = new RacingCarView();
new RacingCarController(model, view);
