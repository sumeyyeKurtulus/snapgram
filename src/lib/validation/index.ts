import { z } from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8, { message: "Too short" }),
});

export const SignInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Too short" }),
});
