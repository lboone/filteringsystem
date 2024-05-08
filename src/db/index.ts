import { Index } from "@upstash/vector"
import * as dotenv from "dotenv";
import { Product } from "../../types";

dotenv.config();
export const db = new Index<Product>()