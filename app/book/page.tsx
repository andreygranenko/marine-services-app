"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import emailjs from "@emailjs/browser";

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [service, setService] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("");
  const [boatType, setBoatType] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [description, setDescription] = useState("");
  const [engineMaker, setEngineMaker] = useState("");
  const [engineModel, setEngineModel] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission (e.g., send data to an API)

    const templateParams = {
      name,
      email,
      service,
      date: date?.toDateString() || "Not Selected",
      location,
      boatType,
      dimensions,
      description,
      engineMaker,
      engineModel,
    };

    try {
      await emailjs.send(
          "service_dgfekup",   // Replace with your EmailJS Service ID
          "contact_me",  // Replace with your EmailJS Template ID
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_KEY    // Replace with your EmailJS Public Key
      );

      setStatus("Booking confirmed! Email sent.");
      setDate(new Date());
      setService("");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("Failed to send confirmation email.");
    }
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
            <option value="boat-repair">Boat Repair</option>
            <option value="boat-inspection">Boat Inspection</option>
            <option value="consultation">Consultation</option>
            <option value="sell-engine">Sell engine</option>
          </select>
        </div>
        <div className="mb-4 flex items-start flex-col">
          <label className="block mb-1 font-medium">Date</label>
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border " />
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
        <div className="mb-4">
          <label htmlFor="location" className="block mb-1 font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        {(service === "boat-repair" || service === "boat-inspection") && (
            <>
              <div className="mb-4">
                <label htmlFor="boatType" className="block mb-1 font-medium">
                  Boat Type
                </label>
                <input
                    type="text"
                    id="boatType"
                    value={boatType}
                    onChange={(e) => setBoatType(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dimensions" className="block mb-1 font-medium">
                  Dimensions
                </label>
                <input
                    type="text"
                    id="dimensions"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="engineMaker" className="block mb-1 font-medium">
                  Engine Maker
                </label>
                <input
                    type="text"
                    id="engineMaker"
                    value={engineMaker}
                    onChange={(e) => setEngineMaker(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="engineModel" className="block mb-1 font-medium">
                  Engine Model
                </label>
                <input
                    type="text"
                    id="engineModel"
                    value={engineModel}
                    onChange={(e) => setEngineModel(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </>
        )}
        {service === "sell-engine" && (
            <>
              <div className="mb-4">
                <label htmlFor="engineMaker" className="block mb-1 font-medium">
                  Engine Maker
                </label>
                <input
                    type="text"
                    id="engineMaker"
                    value={engineMaker}
                    onChange={(e) => setEngineMaker(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="engineModel" className="block mb-1 font-medium">
                  Engine Model
                </label>
                <input
                    type="text"
                    id="engineModel"
                    value={engineModel}
                    onChange={(e) => setEngineModel(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </>

        )}
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1 font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Book Appointment
        </button>
        {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  )
}

