export type Appointment = {
  id: number;
  date: Date;
  time: string;
  description: string;
};

export type AppointmentFormType = Pick<
  Appointment,
  "date" | "time" | "description"
>;
