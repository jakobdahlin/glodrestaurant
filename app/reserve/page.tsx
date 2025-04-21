import ReservationSystem from "@/components/reservation-system"
import Image from "next/image"

export default function Reserve() {
  return (
    <div className="relative min-h-screen">
      {/* Full Background Image */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-50">
        <Image src="/images/int1.png" alt="NORD Ambiance" fill className="object-cover" />
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container-custom">
          <h1 className="text-center">Make a Reservation</h1>
          <p className="text-center text-white/80 max-w-2xl mx-auto">
            Reservations are available one month in advance. We offer two seatings each evening: 5:00 PM and 7:00 PM,
            Tuesday through Saturday.
          </p>
        </div>
      </section>

      {/* Reservation System */}
      <section className="section relative z-10">
        <div className="container-custom max-w-4xl">
          <ReservationSystem />

          <div className="mt-16 border-t border-white/10 pt-8">
            <h2>Reservation Policies</h2>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-white/80">
              <li>Reservations require a credit card to secure your table.</li>
              <li>We require 48 hours notice for cancellations.</li>
              <li>
                Cancellations made less than 48 hours before your reservation may be subject to a cancellation fee of
                $75 per person.
              </li>
              <li>
                For parties larger than 4 people, please contact us directly at reservations@glodnyc.com or call (212)
                555-1234.
              </li>
              <li>
                If you're running late, please call us to hold your table. We can only hold reservations for 15 minutes
                past the reservation time.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
