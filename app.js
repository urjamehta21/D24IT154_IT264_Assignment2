// app.js
import { addAppointment, upcomingAppointments, scheduleReminders } from "./appointmentManager.js";

// Add sample appointments
addAppointment("Alice", "2025-02-12T15:30:00", "Consultation");
addAppointment("Bob", "2025-02-12T16:00:00", "Follow-up");
addAppointment("Charlie", "2025-02-12T14:45:00", "Checkup");

// Display upcoming appointments within the next hour
upcomingAppointments();

// Schedule reminders for appointments
scheduleReminders();
