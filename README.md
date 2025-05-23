# Appointment Scheduler

## Description
`Appointment Scheduler` is a simple Node.js module to manage patient appointments in a healthcare system. It allows adding, updating, and cancelling appointments while keeping track of each patient's visits and schedules.

## Features
- Book new patient appointments with doctor and date/time
- List all appointments
- Search for appointments by patient name
- Cancel appointments
- Reschedule appointments

## File Required
Only one file is required for this assignment:

`YourName_appointment.js` – This is my healthcare appointment scheduling Node.js module.

## How to Use

### 1. Setup Instructions
Ensure Node.js is installed on your system.

Create a testing file like `app.js` to try the module.

**Example folder structure:**

assignment1/

├── Adeline_appointment_module.js
├── app.js
└── README.md


---

### 2. Example of `app.js`

```js
console.log("========================================");
console.log("Welcome to the Healthcare Appointment App");
console.log("========================================\n");

const appt = require('./Adeline_appointment_module.js');

// Book new appointments
console.log("Booking Appointments:");
appt.createAppointment("Alice", "Dr. Tan", "2025-06-01T09:00");
appt.createAppointment("Bob", "Dr. Lim", "2025-06-02T10:30");
console.log(appt.getAllAppointments());
console.log();

// Find appointments for a patient
console.log("Finding Appointments for Alice:");
console.log(appt.findAppointmentsByPatient("Alice"));
console.log();

// Reschedule an appointment
console.log("Rescheduling Appointment ID 1:");
console.log(appt.rescheduleAppointment(1, "2025-06-01T11:00"));
console.log();

// Cancel an appointment
console.log("Cancelling Appointment ID 2:");
console.log(appt.cancelAppointment(2));
console.log();

// Final Appointment List
console.log("Final Appointments List:");
console.log(appt.getAllAppointments());
console.log();
```




### 3. Functions Available
| Function                                               | Description                                             | Parameters                                                                       |
| ------------------------------------------------------ | ------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `createAppointment(patientName, doctorName, dateTime)` | Adds a new appointment to the system                    | `patientName` (string), `doctorName` (string), `dateTime` (string in ISO format) |
| `getAllAppointments()`                                 | Returns a list of all appointments                      | None                                                                             |
| `findAppointmentsByPatient(patientName)`               | Finds appointments by patient's name (case insensitive) | `patientName` (string)                                                           |
| `cancelAppointment(id)`                                | Cancels the appointment with the given ID               | `id` (number)                                                                    |
| `rescheduleAppointment(id, newDateTime)`               | Updates the appointment date/time                       | `id` (number), `newDateTime` (string in ISO format)                              |


### 4. How to run app.js


```
node app.js
```


References
MyHealth Portal Singapore – [https://www.healthhub.sg]
