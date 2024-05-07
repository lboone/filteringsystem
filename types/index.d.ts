/* eslint-disable no-unused-vars */
import { z } from "zod";
import { ProductFilterValidator } from "@/lib/validators/product-validator";

declare type Product = {
  id: string;
  name: string;
  price: number;
  imageId: string;
  size: "S" | "M" | "L";
  color: "white" | "beige" | "blue" | "green" | "purple";
};

declare type ProductState = Omit<
  z.infer<typeof ProductFilterValidator>,
  "price"
> & {
  price: { isCustom: boolean; range: [number, number] };
};
