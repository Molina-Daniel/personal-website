"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 200)) {
    return { error: "Invalid email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "danielmolina.dev@gmail.com",
      subject: "Message from my personal website",
      replyTo: email as string,
      text: message as string,
    });

    if (error) {
      throw error;
    }

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
