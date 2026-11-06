import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    let body;
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      try {
        body = await request.json();
      } catch (err) {
        return NextResponse.json(
          { error: "Invalid JSON payload in request." },
          { status: 400 }
        );
      }
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    } else {
      try {
        body = await request.json();
      } catch {
        return NextResponse.json(
          { error: "Unsupported Content-Type or malformed body." },
          { status: 400 }
        );
      }
    }

    const { name, email, subject, message } = body || {};

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields. Please provide name, email, subject, and message." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Server-side logging for record keeping
    console.log(`[Contact API] Received inquiry from ${name} <${email}>: "${subject}"`);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been processed successfully.",
        recipient: "shivushantageri9@gmail.com",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing the contact request." },
      { status: 500 }
    );
  }
}
