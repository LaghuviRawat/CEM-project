import mongoose from "mongoose";
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventType: { type: String, enum: ["online", "offline"], required: true },
    registrationFee: { type: Number, required: true },
    expectedAttendees: { type: Number, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    createdOn: { type: Date, required: true },
  },
  { timestamps: true }
);

const Event = model("Event", eventSchema);
export default Event;


// import Event from "../../models/event.js";  // adjust path if needed

// // Create Event Controller
// const createEvent = async (req, res) => {
//   try {
//     const {
//       name,
//       eventDate,
//       eventType,
//       registrationFee,
//       expectedAttendees,
//       createdBy
//     } = req.body;

//     // Basic validation
//     if (!name || !eventDate || !eventType || !registrationFee || !expectedAttendees) {
//       return res.status(400).json({ error: "All required fields must be provided" });
//     }

//     // Create new event object
//     const newEvent = new Event({
//       name,
//       eventDate,
//       eventType,
//       registrationFee,
//       expectedAttendees,
//       createdBy: createdBy || null,
//       createdOn: new Date()
//     });

//     // Save in DB
//     await newEvent.save();

//     return res.status(201).json({
//       message: "Event created successfully",
//       event: newEvent
//     });
//   } catch (error) {
//     console.error("Error creating event:", error);
//     return res.status(500).json({ error: error.message });
//   }
// };

// export default createEvent;
