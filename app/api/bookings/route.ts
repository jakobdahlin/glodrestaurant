// app/api/bookings/route.ts

import { NextResponse } from "next/server"

let bookings: any[] = [] // This will be lost on refresh unless stored elsewhere

export async function GET() {
  return NextResponse.json(bookings)
}

export async function POST(req: Request) {
  const body = await req.json()
  const newBooking = { ...body, id: Math.random().toString(36).substring(2, 9) }
  bookings.push(newBooking)
  return NextResponse.json(newBooking, { status: 201 })
}
