"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Check, Users } from "lucide-react"
import { cn } from "@/lib/utils"

// This would typically come from a database
const TABLES_PER_SITTING = 15

type Booking = {
  id: string
  date: Date
  time: "5:00 PM" | "7:00 PM"
  partySize: number
  name: string
  email: string
  phone: string
  specialRequests?: string
}

type AvailabilityMap = {
  [date: string]: {
    "5:00 PM": number
    "7:00 PM": number
  }
}

export default function ReservationSystem() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)
  const [partySize, setPartySize] = useState<string | undefined>(undefined)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")
  const [step, setStep] = useState(1)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [availability, setAvailability] = useState<AvailabilityMap>({})
  const [confirmationOpen, setConfirmationOpen] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)
  const [confirmationDetails, setConfirmationDetails] = useState<Booking | null>(null)

  // Calculate the date range for the next month only
  const today = new Date()
  const nextMonth = new Date(today)
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  const firstDayNextMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1)
  const lastDayNextMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0)

  // Initialize availability data
  useEffect(() => {
    fetch("/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
  
    const initialAvailability: AvailabilityMap = {}
    let currentDate = new Date(firstDayNextMonth)
    while (currentDate <= lastDayNextMonth) {
      if (currentDate.getDay() !== 0) {
        const dateString = currentDate.toISOString().split("T")[0]
        initialAvailability[dateString] = {
          "5:00 PM": TABLES_PER_SITTING,
          "7:00 PM": TABLES_PER_SITTING,
        }
      }
  
      currentDate = new Date(currentDate)
      currentDate.setDate(currentDate.getDate() + 1)
    }
  
    setAvailability(initialAvailability)
  }, [])
  

  // Update availability based on bookings
  useEffect(() => {
    if (Object.keys(availability).length === 0) return
  
    const newAvailability = { ...availability }
  
    bookings.forEach((booking) => {
      const dateString = booking.date.toISOString().split("T")[0]
      if (newAvailability[dateString]) {
        newAvailability[dateString][booking.time] -= 1
      }
    })
  
    setAvailability(newAvailability)
  }, [bookings])

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    setTime(undefined) // Reset time when date changes
  }

  const isDateAvailable = (date: Date) => {
    // Only allow dates in the next month
    if (date < firstDayNextMonth || date > lastDayNextMonth) {
      return false
    }

    // Check if it's a Sunday (0) - restaurant closed
    const dayOfWeek = date.getDay()
    if (dayOfWeek === 0) {
      // Only exclude Sundays
      return false
    }

    return true
  }

  const getAvailableTimesForDate = () => {
    if (!date) return []

    const dateString = date.toISOString().split("T")[0]
    const availableTimes = []

    if (availability[dateString]) {
      if (availability[dateString]["5:00 PM"] > 0) {
        availableTimes.push("5:00 PM")
      }
      if (availability[dateString]["7:00 PM"] > 0) {
        availableTimes.push("7:00 PM")
      }
    }

    return availableTimes
  }

  const getAvailableTablesForDateTime = (timeSlot: string) => {
    if (!date) return 0

    const dateString = date.toISOString().split("T")[0]

    if (availability[dateString] && availability[dateString][timeSlot as "5:00 PM" | "7:00 PM"]) {
      return availability[dateString][timeSlot as "5:00 PM" | "7:00 PM"]
    }

    return 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !time || !partySize || !name || !email || !phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Create a new booking
    const newBooking: Booking = {
      id: Math.random().toString(36).substring(2, 9),
      date: date,
      time: time as "5:00 PM" | "7:00 PM",
      partySize: Number.parseInt(partySize),
      name,
      email,
      phone,
      specialRequests,
    }

    // Update bookings
    fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
.then((data) => {
  // Convert the date string back into a Date object
  data.date = new Date(data.date)

  setBookings([...bookings, data])
  setConfirmationDetails(data)
  setConfirmationOpen(true)
  setBookingComplete(true)
})

      .catch(() => {
        toast({
          title: "Error",
          description: "Could not complete reservation. Please try again.",
          variant: "destructive",
        })
      })
    

    // Set confirmation details
    setConfirmationDetails(newBooking)
    setConfirmationOpen(true)
    setBookingComplete(true)

    // Reset form
    setDate(undefined)
    setTime(undefined)
    setPartySize(undefined)
    setName("")
    setEmail("")
    setPhone("")
    setSpecialRequests("")
    setStep(1)
  }

  const nextStep = () => {
    if (step === 1 && (!date || !time || !partySize)) {
      toast({
        title: "Missing information",
        description: "Please select a date, time, and party size.",
        variant: "destructive",
      })
      return
    }

    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <div>
      <Toaster />

      <Card className="bg-black/10 border-white/10 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Reserve Your Table</CardTitle>
          <CardDescription className="text-zinc-400">
            {step === 1 ? "Select your date, time, and party size" : "Complete your contact information"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Calendar Column */}
                <div>
                  <Label htmlFor="date" className="block mb-4">
                    Date
                  </Label>
                  <div className="border border-white/10 flex rounded-md p-4 text-white">
                  <Calendar
  mode="single"
  selected={date}
  onSelect={handleDateSelect}
  disabled={(date) => !isDateAvailable(date)}
  className="mx-auto"
  weekStartsOn={1}
  classNames={{
    day: "text-sky-400 hover:text-white transition duration-200 hover:scale-125", // <-- this is what you're asking for
  }}
/>
                  </div>
                  {date && <p className="text-sm text-white mt-2">Selected: {formatDate(date)}</p>}
                </div>

                {/* Time and Party Size Column */}
                <div className="space-y-8">
                  {/* Time Selection */}
                  <div>
                    <Label className="block mb-4">Time</Label>
                    <div className="space-y-4">
                      {["5:00 PM", "7:00 PM"].map((timeSlot) => {
                        const availableTables = getAvailableTablesForDateTime(timeSlot)
                        const isAvailable = date && availableTables > 0

                        return (
                          <div key={timeSlot} className="flex items-center justify-between">
                            <Button
                            type="button"
                            onClick={() => setTime(timeSlot)}
                            disabled={!isAvailable}
                            className={cn(
                              "w-full justify-between border px-4 py-2 rounded-md text-sm",
                              !isAvailable && "opacity-50 cursor-not-allowed",
                              time === timeSlot
                              ? "border-sky-400 text-white bg-sky-400/10"
                              : "border-zinc-700 text-zinc-400 hover:border-white hover:text-white"
                              )}
                            >
                            <span>{timeSlot}</span>
                            {isAvailable && (
                            <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full">
                            {availableTables} available
                            </span>
                            )}
                            </Button>
                          </div>
                        )
                      })}
                    </div>
                    {!date && <p className="text-sm text-zinc-400 mt-2">Please select a date first</p>}
                  </div>

                  {/* Party Size Selection */}
                  <div>
                    <Label className="block mb-4">Party Size</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((size) => (
                        <Button
                        key={size}
                        type="button"
                        disabled={!date || !time}
                        onClick={() => setPartySize(size.toString())}
                        className={cn(
                          "flex items-center w-full px-4 py-2 border rounded-md text-sm",
                          !date || !time ? "opacity-50 cursor-not-allowed" : "",
                          partySize === size.toString()
                            ? "border-sky-400 text-white bg-sky-400/10"
                            : "border-zinc-700 text-zinc-400 hover:border-white hover:text-white"
                        )}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        {size} {size === 1 ? "person" : "people"}
                      </Button>
                      ))}
                    </div>
                    {(!date || !time) && (
                      <p className="text-sm text-white/60 mt-2">
                        {!date ? "Please select a date first" : "Please select a time first"}
                      </p>
                    )}
                    <p className="text-sm text-zinc-400 mt-4">
                      For parties larger than 4, please contact us directly at reservations@glodnyc.com
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block mb-2">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-black border-white/10 text-sky-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="block mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-black border-white/10 text-sky-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="block mb-2">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="bg-black border-white/10 text-sky-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequests" className="block mb-2">
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="specialRequests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="bg-black border-white/10 text-sky-400"
                    rows={4}
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-medium mb-2">Reservation Summary</h3>
                  <p className="text-sky-400">
                    {date && formatDate(date)} at {time}
                  </p>
                  <p className="text-white/80">Party of {partySize}</p>
                </div>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {step === 1 ? (
            <div className="w-full flex justify-end">
              <Button
  type="button"
  onClick={nextStep}
  disabled={!date || !time || !partySize}
  className={cn(
    "px-6 py-2 border rounded-md text-sm",
    !date || !time || !partySize
      ? "opacity-50 cursor-not-allowed border-zinc-700"
      : "border-zinc-700 hover:border-sky-400 hover:bg-sky-400/10 hover:shadow-lg hover:shadow-sky-400/30 hover:scale-105 transition duration-300"
  )}
>
  Continue
</Button>
            </div>
          ) : (
            <div className="w-full flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep}
                className={cn(
                  "px-6 py-2 border rounded-md text-sm",
                  !date || !time || !partySize
                    ? "opacity-50 cursor-not-allowed border-zinc-700"
                    : "border-zinc-700 hover:border-sky-400 hover:bg-sky-400/10 hover:shadow-lg hover:shadow-sky-400/30 hover:scale-105 transition duration-300"
                )}>
                Back
              </Button>
                            <Button
  type="button"
  onClick={handleSubmit}
  disabled={!name || !email || !phone}
  className={cn(
    "px-6 py-2 border rounded-md text-sm",
    !date || !time || !partySize
      ? "opacity-50 cursor-not-allowed border-zinc-700"
      : "border-zinc-700 hover:border-sky-400 hover:bg-sky-400/10 hover:shadow-lg hover:shadow-sky-400/30 hover:scale-105 transition duration-300"
  )}
>
  Continue
</Button>
            </div>
          )}
        </CardFooter>
      </Card>

      <Dialog open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <DialogContent className="bg-zinc-950 border-white/10">
          <DialogHeader>
            <DialogTitle>Reservation Confirmed</DialogTitle>
            <DialogDescription className="text-white/60">
              Your table has been reserved. A confirmation email has been sent.
            </DialogDescription>
          </DialogHeader>

          {confirmationDetails && (
            <div className="space-y-4">
              <div className="p-4 bg-zinc-900 rounded-md flex items-center gap-4">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-medium">Reservation Details</h3>
                  <p className="text-white/80">
                    {formatDate(confirmationDetails.date)} at {confirmationDetails.time}
                  </p>
                  <p className="text-white/80">Party of {confirmationDetails.partySize}</p>
                </div>
              </div>

              <div className="text-sm text-white/60">
                <p>A confirmation has been sent to {confirmationDetails.email}</p>
                <p className="mt-2">Reservation ID: {confirmationDetails.id}</p>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button onClick={() => setConfirmationOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
