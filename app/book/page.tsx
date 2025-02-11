"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [service, setService] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission (e.g., send data to an API)
    console.log("Booking submitted:", { date, service, name, email })
    // Reset form
    setDate(new Date())
    setService("")
    setName("")
    setEmail("")
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Book a Service</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="service" className="block mb-1 font-medium">
            Service
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select a service</option>
            <option value="repair">Engine Repair</option>
            <option value="rental">Engine Rental</option>
            <option value="consultation">Consultation</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Date</label>
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Book Appointment
        </button>
      </form>
    </div>
  )
}

