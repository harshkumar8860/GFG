import { z } from "zod";

// ✅ Reusable validation rules
export const emailValidation = z.string().email("Invalid email address");

export const passwordValidation = z
  .string()
  .min(6, "Password must be at least 6 characters")
  .max(20, "Password must be at most 20 characters")
  .refine((val) => /[a-z]/.test(val), {
    message: "Password must include at least one lowercase letter",
  })
  .refine((val) => /[A-Z]/.test(val), {
    message: "Password must include at least one uppercase letter",
  })
  .refine((val) => /\d/.test(val), {
    message: "Password must include at least one number",
  })
  .refine((val) => /[@$!%*#?&]/.test(val), {
    message: "Password must include at least one special character",
  });

// ✅ Base schema shared by login and register
export const baseAuthSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
});

// ✅ Login schema
export const loginSchema = baseAuthSchema;

// ✅ Register schema (extends base with username)
export const registerSchema = baseAuthSchema.extend({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(/^[A-Za-z]+$/, "Username should contain only letters"),
});
