import { describe, it, expect } from "vitest";
import { contactSchema } from "@/components/rabta/ContactForm";

const ok = { name: "Asha", email: "asha@example.com", reason: "volunteer", message: "I would love to help teach." };

describe("contact form rules", () => {
  it("accepts a valid message without organization", () => {
    expect(contactSchema.safeParse(ok).success).toBe(true);
  });
  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...ok, email: "nope" }).success).toBe(false);
  });
  it("rejects messages shorter than 10 characters", () => {
    expect(contactSchema.safeParse({ ...ok, message: "hi" }).success).toBe(false);
  });
});
