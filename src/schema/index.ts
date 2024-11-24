import { z } from "zod"

export const Orderschema = z.object({
    name: z.string().min(1, "Tu Nombre es Obligatorio")
})