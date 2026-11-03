import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Nama lengkap wajib diisi (minimal 2 karakter).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      errors.email = "Alamat email tidak valid.";
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      errors.subject = "Subjek pesan wajib diisi (minimal 3 karakter).";
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.message = "Pesan wajib diisi (minimal 10 karakter agar konteks jelas).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Terdapat data yang belum sesuai. Silakan periksa kembali formulir Anda.",
          errors,
        },
        { status: 400 }
      );
    }

    // In a production setup with environment variables, this connects to Resend, SendGrid, or nodemailer.
    // Here we log the structured incoming message to the server console.
    console.log("[CONTACT_FORM_SUBMISSION]", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Terima kasih! Pesan Anda telah berhasil terkirim. Saya akan merespons melalui email secepatnya.",
        receivedData: {
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan internal pada server. Silakan coba kembali nanti atau hubungi via WhatsApp/Email langsung.",
      },
      { status: 500 }
    );
  }
}
