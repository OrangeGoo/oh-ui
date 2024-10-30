// import { useState } from "react";
// import { columns } from "../components/Appointments/columns"
// import { DataTable } from "../components/Appointments/data-table"
// import { fetchAppointments } from "@/lib/api"

// async function getData(): Promise<Appointment[]> {
//   // Fetch data from your API here.
//   return [
//     // {
//     //   id: "728ed52f",
//     //   amount: 100,
//     //   status: "pending",
//     //   email: "m@example.com",
//     // },
//     // ...
//   ]
// }

export default async function DemoPage() {
  // const data = await fetchAppointments()
  // const [appointments, setAppointments] = useState<Appointment[]>([]);

  return (
    <>
    <h2 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h2>
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto py-10">
        {/* <DataTable columns={columns} data={data} /> */}
      </div>
    </div>
    </>
  )
}
