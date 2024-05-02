import { MovieProps } from "@/constants/interfaces/MovieProps";

export const calculateTotalValue = (cart: MovieProps[]) => {
  let totalValue = 0;

  cart.forEach((item) => {
    const quantity = item.quantity !== undefined ? item.quantity : 1;
    totalValue += item.price * quantity;
  });

  return totalValue;
};
