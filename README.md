# Appointment Scheduling Module

## Overview
This Node.js module simulates a simple appointment scheduling system for healthcare clinics or hospitals. It supports creating, listing, cancelling, and rescheduling patient appointments using an in-memory array.

## Functions
- `createAppointment(patientName, doctorName, dateTime)`
- `getAllAppointments()`
- `findAppointmentsByPatient(patientName)`
- `cancelAppointment(id)`
- `rescheduleAppointment(id, newDateTime)`

## How to Use
1. Clone this repo.
2. Create a test script:
```js
const appt = require('./yourname_appointment_module');
appt.createAppointment("John", "Dr. Lee", "2025-07-01T10:00");
