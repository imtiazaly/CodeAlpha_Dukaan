import { apiRequest } from "./api";

export function getProducts() {
  return apiRequest("/products");
}
