export const priceFormatting = (price: number): string => {
  let roundedPrice = price.toFixed(2);
  let formattedPrice = roundedPrice.replace(".", ",");
  return formattedPrice;
};
