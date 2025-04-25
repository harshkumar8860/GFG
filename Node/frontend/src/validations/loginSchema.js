// import { z } from "zod";

// export const loginSchema = z.object({
//   email: z.string().email("Invalid email"),
//   password: z
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .regex(/^[a-zA-Z0-9]+$/, "Password must be alphanumeric"),
// });





import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Invalid email"),

    password: z
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
        })
});
