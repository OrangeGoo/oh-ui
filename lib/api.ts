// lib/api.ts
import { Appointment, AppointmentFormType } from "./defintion";

let appointments: Appointment[] = [
  {
    id: 1,
    date: new Date("2024-10-05"),
    time: "10:00",
    description: "Math Tutoring",
  },
  {
    id: 2,
    date: new Date("2024-10-06"),
    time: "14:00",
    description: "Career Counseling",
  },
];

// Simulate network delay
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchAppointments = async () => {
  await delay(500); // simulate delay
  return appointments;
};

export const createAppointment = async (appointment: AppointmentFormType) => {
  await delay(500);
  const newAppointment = { id: Date.now(), ...appointment };
  appointments.push(newAppointment);
  return newAppointment;
};

export const updateAppointment = async (
  id: Pick<Appointment, "id">,
  updatedData: AppointmentFormType
) => {
  await delay(500);
  appointments = appointments.map((appt) =>
    appt.id === Number(id) ? { ...appt, ...updatedData } : appt
  );
  return appointments.find((appt) => appt.id === Number(id));
};

export const deleteAppointment = async (id: Pick<Appointment, "id">) => {
  await delay(500);
  appointments = appointments.filter((appt) => appt.id !== Number(id));
  return true;
};
