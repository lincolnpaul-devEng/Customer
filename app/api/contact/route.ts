import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json()
  console.log("Contact form submission:", data)
  // In a real application, you would send an email here
  return NextResponse.json({ message: "Message sent successfully" })
}
