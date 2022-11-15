import { HomesController } from "./Controllers/HomesController.js";
import { jobsController } from "./Controllers/JobsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  homesController = new HomesController();
  jobsController = new jobsController()
}

window["app"] = new App();
