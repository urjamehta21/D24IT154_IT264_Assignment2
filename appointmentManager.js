// appointmentManager.js

const appointments = [];

/**
 * Add a new appointment
 * @param {string} clientName - Name of the client
 * @param {string} appointmentTime - Date string (ISO format or readable format)
 * @param {string} serviceType - Type of service
 */
export function addAppointment(clientName, appointmentTime, serviceType) {
    try {
        const appointmentDate = new Date(appointmentTime);
        if (!clientName || isNaN(appointmentDate)) {
            throw new Error("Invalid appointment data. Ensure clientName is non-empty and appointmentTime is a valid date.");
        }

        const appointment = {
            clientName,
            appointmentTime: appointmentDate,
            serviceType
        };

        appointments.push(appointment);
        console.log(`Appointment for "${clientName}" added successfully.`);
    } catch (error) {
        console.error("Error adding appointment:", error.message);
    }
}

/**
 * Display appointments scheduled for the next hour
 */
export function upcomingAppointments() {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000); // Add 1 hour

    const upcoming = appointments.filter(appointment => 
        appointment.appointmentTime > now && appointment.appointmentTime <= oneHourLater
    );

    if (upcoming.length === 0) {
        console.log("No upcoming appointments within the next hour.");
    } else {
        console.log("Upcoming Appointments:");
        upcoming.forEach(appointment => {
            console.log(`- ${appointment.clientName}, Service: ${appointment.serviceType}, Time: ${appointment.appointmentTime.toLocaleString()}`);
        });
    }
}

/**
 * Schedule reminders for appointments
 */
export function scheduleReminders() {
    appointments.forEach(appointment => {
        const delay = appointment.appointmentTime.getTime() - Date.now();

        if (delay > 0) {
            setTimeout(() => {
                console.log(`Reminder: Your appointment for ${appointment.serviceType} with ${appointment.clientName} is scheduled at ${appointment.appointmentTime.toLocaleString()}`);
            }, delay);
        }
    });
}

// Export all functions
export { appointments };
