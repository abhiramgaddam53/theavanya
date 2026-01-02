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
    "type": "template",
    "template": {
        "name": "booking",
        "language": {
            "code": "en"
        },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: guestName },
              { type: "text", text: checkIn },
              { type: "text", text: checkOut },
              { type: "text", text: roomType }, //(${roomNo})  on in free trial
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
  from: `"Avanya Hotel" <${OWNER_EMAIL}>`,
  to: guestEmail,
  subject: `Booking Confirmed - ${guestName}`,
  html: `
  <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
    <table width="600" align="center" cellpadding="0" cellspacing="0" 
           style="background:#ffffff; border-radius:8px; overflow:hidden;">
      <tr>
        <td style="padding:20px 24px; border-bottom:1px solid #ffdcacff;">
<img 
  src="https://drive.google.com/uc?export=view&id=1FEq_7OxGyJ3AACM1_mrtopNBvCy7H_HD"
  alt="Avanya Hotel"
  height="42"
/>
          <h2 style="margin:16px 0 4px; font-size:22px;">Your reservation is confirmed</h2>
          <p style="margin:0; color:#555;">
            Hi <strong>${guestName}</strong>, you're staying with Avanya Hotel!
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:20px 24px; border-bottom:1px solid #eee;">
          <p style="margin:0 0 4px; font-size:12px; text-transform:uppercase; color:#888;">
            Reservation code
          </p>
          <p style="margin:0; font-size:16px; font-weight:600;">
            Rhdnd123456
          </p>
          <p style="margin:12px 0 4px; font-size:12px; text-transform:uppercase; color:#888;">
            Reservation PIN
          </p>
          <p style="margin:0; font-size:16px; font-weight:600;">
            123456
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:20px 24px; border-bottom:1px solid #eee;">
          <h3 style="margin:0 0 8px; font-size:16px;">${roomType}</h3>
          <p style="margin:0; color:#555;">
            Room No: <strong>${roomNo}</strong> • Guest Name: <strong>${guestName}</strong>
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:20px 24px; border-bottom:1px solid #eee;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="50%" style="vertical-align:top;">
                <p style="margin:0 0 4px; font-size:12px; text-transform:uppercase; color:#888;">
                  Check-in
                </p>
                <p style="margin:0; font-size:14px;">
                  ${checkIn}<br/>
                  From 2:00 PM
                </p>
              </td>
              <td width="50%" style="vertical-align:top;">
                <p style="margin:0 0 4px; font-size:12px; text-transform:uppercase; color:#888;">
                  Check-out
                </p>
                <p style="margin:0; font-size:14px;">
                  ${checkOut}<br/>
                  Until 12:00 PM
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding:20px 24px; border-bottom:1px solid #eee;">
          <p style="margin:0 0 4px; font-size:12px; text-transform:uppercase; color:#888;">
            Address
          </p>
          <p style="margin:0; font-size:14px; color:#555;">
            Avanya Hotel<br/>
           <br/>
            Charni Road, Mumbai, Maharashtra 400004<br/>
            India
          </p>
        </td>
      </tr>
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:20px 24px; border-bottom:1px solid #eee;">
          <p style="margin:0 0 8px; font-size:12px; text-transform:uppercase; color:#888;">
            Amount and payments
          </p>
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; color:#555;">
            <tr>
              <td>Booking price</td>
              <td align="right">₹${total}</td>
            </tr>
            <tr>
              <td>Taxes</td>
              <td align="right">₹0.00</td>
            </tr>
            <tr>
              <td style="padding-top:6px; border-top:1px solid #eee; font-weight:600;">
                Final total
              </td>
              <td align="right" style="padding-top:6px; border-top:1px solid #eee; font-weight:600;">
                ₹${total}
              </td>
            </tr>
            <tr>
              <td>Amount paid</td>
              <td align="right">₹${total}</td>
            </tr>
            <tr>
              <td>Balance due</td>
              <td align="right">₹0</td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding:16px 24px;">
          <p style="margin:0 0 4px; font-size:12px; text-transform:uppercase; color:#888;">
            Need help?
          </p>
          <p style="margin:0; font-size:14px; color:#555;">
            📞 WhatsApp Support: <strong>+91 99667 01124</strong><br/>
            ✉ Email: ${OWNER_EMAIL}
          </p>
        </td>
      </tr>
    </table>

    <p style="max-width:600px; margin:12px auto 0; font-size:11px; color:#888; line-height:1.5;">
      ⚠ Do not click on any suspicious payment links received via WhatsApp or SMS. 
      Verify the sender by contacting the hotel directly and report any suspicious messages to ${OWNER_EMAIL}.
    </p>
  </div>
  `
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
