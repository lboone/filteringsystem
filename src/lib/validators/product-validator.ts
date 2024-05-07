import { SIZES, COLORS, SORT } from "@/consts";
import { z } from "zod";

export const ProductFilterValidator = z.object({
  size: z.array(z.enum(SIZES)),
  color: z.array(z.enum(COLORS)),
  sort: z.enum(SORT), 
  price: z.tuple([z.number(), z.number()]),
});