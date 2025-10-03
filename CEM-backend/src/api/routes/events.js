import { Router } from "express";
import { auth } from "../middlewares/index.js";

// Importing controllers
import createEvent from "../controllers/event/create-event.js";
import deleteEvent from "../controllers/event/delete-event.js";
import {
  get_all_event_names,
  get_event_stats,
} from "../controllers/event/get-event-stats.js";
import {
  adding_participant,
  removing_participant,
} from "../controllers/event/update-event.js";

const router = Router();

// Event Management
router.post("/event/create", createEvent); // ✅ use POST for creation

// Deleting Event Route
router.delete("/event/delete", deleteEvent);

// Listing Events Route
router.get("/event/all", get_all_event_names);
router.get("/event/view", get_event_stats);

// Managing the attending members of an event
router.post("/event/add-member", adding_participant);
router.delete("/event/del-member", removing_participant);

export default router;
