// app/components/AppointmentForm.js

// import React from 'react';
// import { useState } from 'react';

// export default function AppointmentForm({ onSubmit, initialData }) {
//   const [date, setDate] = useState(initialData ? initialData.date : '');
//   const [time, setTime] = useState(initialData ? initialData.time : '');
//   const [description, setDescription] = useState(initialData ? initialData.description : '');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ date, time, description });
//   };

//   return (
//     <form onSubmit={handleSubmit} style={formStyle}>
//       <h3>{initialData ? 'Edit Appointment' : 'Add New Appointment'}</h3>
//       <label style={labelStyle}>Date:</label>
//       <input 
//         type="date" 
//         value={date} 
//         onChange={(e) => setDate(e.target.value)} 
//         required 
//         style={inputStyle}
//       />

//       <label style={labelStyle}>Time:</label>
//       <input 
//         type="time" 
//         value={time} 
//         onChange={(e) => setTime(e.target.value)} 
//         required 
//         style={inputStyle}
//       />

//       <label style={labelStyle}>Description:</label>
//       <input 
//         type="text" 
//         value={description} 
//         onChange={(e) => setDescription(e.target.value)} 
//         required 
//         style={inputStyle}
//       />

//       <button type="submit" style={submitButtonStyle}>
//         {initialData ? 'Update' : 'Create'}
//       </button>
//     </form>
//   );
// }

// const formStyle = {
//   display: 'flex',
//   flexDirection: 'column',
// };

// const labelStyle = {
//   margin: '10px 0 5px',
// };

// const inputStyle = {
//   padding: '8px',
//   borderRadius: '4px',
//   border: '1px solid #ccc',
// };

// const submitButtonStyle = {
//   padding: '10px',
//   marginTop: '20px',
//   backgroundColor: '#28a745',
//   color: 'white',
//   border: 'none',
//   borderRadius: '4px',
// };

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
// import { useState } from "react";
// import { Appointment } from "@/lib/defintion"
// import { createAppointment, updateAppointment } from "@/lib/api"

const formSchema = z.object({
  date: z.date({
    required_error: "A date of appointment is required.",
  }),
  time: z.string({
    required_error: "A time of appointment is required.",
  }),
  description: z
    .string()
    .max(100, { message: 'Description cannot exceed 100 characters' }) // 最多 100 个字符
    .optional(),
})


export default function AppointmentForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover modal={true}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date is used to make an appointment with professor.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time</FormLabel>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
              <FormDescription>
                Your time is used to make an appointment with professor.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell professor a little bit about your questions"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
