import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import axios from "axios";

const WHATSAPP_TOKEN ="EAAcbUxdNGukBQfS2zfC6bOt1hrkSMAqdKEIst0LVgsZALv1qM2qNZA53G4jRfJp2ABZBkZCxc0XCHxVNp5fsisyJnjqmsSKnYoJY81NaDnh2eaP9LWDfl3kBAC9GKDM9NXD0r5ClDTo9lM2ds1md5ut8xp3gyX90P8A5XuGxICCOuTRDZBVU4M8CuqeJSPcVJrwZDZD";
const WHATSAPP_PHONE_ID = "995735710279634";
const OWNER_EMAIL = "asterisks.inc@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      guestName,
      guestEmail,
      guestPhone,
      checkIn,
      checkOut,
      total,
      roomType,
      roomNo,
    } = body;


    const whatsappPayload = {
      messaging_product: "whatsapp",
     to: `91${guestPhone}`,
      type: "template",
      template: {
        name: "booking",
        language: { code: "en_US" },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: guestName },
              { type: "text", text: checkIn },
              { type: "text", text: checkOut },
              { type: "text", text: `${roomType} (${roomNo})` },
              { type: "text", text: total.toString() },
            ],
          },
        ],
      },
    };


    try {
      const waRes = await axios.post(
        `https://graph.facebook.com/v20.0/${WHATSAPP_PHONE_ID}/messages`,
        whatsappPayload,
        {
          headers: {
            Authorization: `Bearer ${WHATSAPP_TOKEN}`,
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );

      console.log("✅ WhatsApp Message ID:", waRes.data.messages[0].id);
    } catch (waErr: any) {
      console.error("❌ WhatsApp Error:", waErr.response?.data || waErr.message);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: OWNER_EMAIL,
        pass: "imuovkllykurhgup",
      },
    });

    await transporter.sendMail({
      from: `"Asterisks Hotel" <${OWNER_EMAIL}>`,
      to: guestEmail,
      subject: `Booking Confirmed - ${guestName}`,
      html: `
        <h2>✅ Booking Confirmed</h2>
        <p>Hello <strong>${guestName}</strong>,</p>
        <p>Your booking details:</p>
        <ul>
          <li><strong>Check-in:</strong> ${checkIn}</li>
          <li><strong>Check-out:</strong> ${checkOut}</li>
          <li><strong>Room:</strong> ${roomType} (${roomNo})</li>
          <li><strong>Total:</strong> ₹${total}</li>
        </ul>
        <p>📞 WhatsApp Support: <strong>+91 99667 01124</strong></p>
      `,
    });

    console.log("✅ Email sent");

    return NextResponse.json({
      ok: true,
      message: "Booking confirmed! WhatsApp + Email sent.",
    });
  } catch (err: any) {
    console.error("❌ API ERROR:", err.response?.data || err.message);

    return NextResponse.json(
      {
        ok: false,
        error: err.response?.data || err.message,
      },
      { status: 500 }
    );
  }
}
