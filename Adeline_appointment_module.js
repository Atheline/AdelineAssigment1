// yourname_appointment_module.js
// This module manages patient appointments for a healthcare system.
// Data is stored using arrays to simulate a simple database.

const appointments = [];

let nextId = 1;

/**
 * Create a new appointment.
 * @param {string} patientName - Name of the patient.
 * @param {string} doctorName - Name of the doctor.
 * @param {string} dateTime - Appointment date and time (ISO format).
 * @returns {object} The created appointment.
 */
function createAppointment(patientName, doctorName, dateTime) {
  const newAppt = {
    id: nextId++,
    patientName,
    doctorName,
    dateTime,
    status: 'Scheduled',
  };
  appointments.push(newAppt);
  return newAppt;
}

/**
 * Get all scheduled appointments.
 * @returns {Array} List of appointments.
 */
function getAllAppointments() {
  return appointments;
}

/**
 * Find appointments for a specific patient.
 * @param {string} patientName - Name of the patient.
 * @returns {Array} List of matching appointments.
 */
function findAppointmentsByPatient(patientName) {
  return appointments.filter(appt => appt.patientName.toLowerCase() === patientName.toLowerCase());
}

/**
 * Cancel an appointment by ID.
 * @param {number} id - Appointment ID.
 * @returns {string} Status message.
 */
function cancelAppointment(id) {
  const appt = appointments.find(appt => appt.id === id);
  if (appt) {
    appt.status = 'Cancelled';
    return `Appointment ID ${id} has been cancelled.`;
  }
  return 'Appointment not found.';
}

/**
 * Reschedule an appointment by ID.
 * @param {number} id - Appointment ID.
 * @param {string} newDateTime - New date and time (ISO format).
 * @returns {object|string} Updated appointment or error message.
 */
function rescheduleAppointment(id, newDateTime) {
  const appt = appointments.find(appt => appt.id === id);
  if (appt && appt.status !== 'Cancelled') {
    appt.dateTime = newDateTime;
    return appt;
  }
  return 'Appointment not found or is cancelled.';
}

// Export functions for external use
module.exports = {
  createAppointment,
  getAllAppointments,
  findAppointmentsByPatient,
  cancelAppointment,
  rescheduleAppointment,
};
