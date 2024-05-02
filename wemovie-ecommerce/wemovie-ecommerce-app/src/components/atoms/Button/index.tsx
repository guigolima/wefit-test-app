import React from "react";
import Image from "next/image";

import { Container, ShoppingCartContainer } from "./styles";

import { ButtonProps } from "./types";

const AddToCartButton = ({
  message,
  isAddToCart,
  color,
  ammount,
  buttonAction,
}: ButtonProps) => {
  const addToCartAdditionalInfo = (
    <ShoppingCartContainer>
      <Image
        priority
        src="/assets/icons/shoppingCart.svg"
        height={13.6}
        width={13.6}
        alt="Shopping cart icon"
      />
      <span>{ammount ?? "0"}</span>
    </ShoppingCartContainer>
  );

  const displayedMessage = () => {
    if (message) {
      return message;
    } else if (isAddToCart) {
      return "Adicionar ao carrinho";
    } else {
      return "Button default message";
    }
  };

  return (
    <Container color={color} onClick={buttonAction}>
      {isAddToCart && addToCartAdditionalInfo}
      <span>{displayedMessage()}</span>
    </Container>
  );
};

export default AddToCartButton;
