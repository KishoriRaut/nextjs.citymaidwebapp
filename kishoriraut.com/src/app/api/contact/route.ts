import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Forward the data to Zapier webhook
  try {
    await fetch("https://hooks.zapier.com/hooks/catch/23505956/uovtn94/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to send to Zapier" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
} 