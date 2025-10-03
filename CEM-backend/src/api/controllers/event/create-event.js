import Event from "../../../models/event.js"; // 3 levels up

export default async function createEvent(req, res) {
      try {
            const {
                  name,
                  eventDate,
                  eventType,
                  registrationFee,
                  expectedAttendees,
                  createdBy,
            } = req.body;

            const newEvent = new Event({
                  name,
                  eventDate,
                  eventType,
                  registrationFee,
                  expectedAttendees,
                  createdBy,
                  createdOn: new Date(),
            });

            await newEvent.save();
            res.status(201).json({ message: "Event created successfully", event: newEvent });
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
}
