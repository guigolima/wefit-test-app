import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { priceFormatting } from "@/utils/priceFormatting";
import { removeItem, updateItemQuantity } from "@/redux/slices/cartSlice";
import useScreenSize from "@/hooks/useScreenSize";

import {
  ActionsColContainer,
  Container,
  ContainerMobile,
  ContentContainerMobile,
  ImageContainer,
  MovieTitleText,
  ProductColContainer,
  QuantityColContainer,
  TotalPriceLabel,
  TotalPriceText,
} from "./styles";

import { CardItemProps } from "./types";

const CartItem = ({ item }: CardItemProps) => {
  const dispatch = useDispatch();
  const screenSize = useScreenSize();

  const { image, title, price, quantity } = item;

  const handleAlterQuantity = (action: "add" | "sub") => {
    let newQuantity =
      action === "add"
        ? quantity + 1
        : action === "sub"
        ? quantity - 1
        : quantity;

    dispatch(updateItemQuantity({ id: item.id, quantity: newQuantity }));
  };

  const quantityContent = (
    <QuantityColContainer>
      <Image
        onClick={() => handleAlterQuantity("sub")}
        priority
        src={"/assets/icons/minusSign.svg"}
        width={18}
        height={18}
        alt="Trash icon"
      />
      <span>{quantity}</span>
      <Image
        onClick={() => handleAlterQuantity("add")}
        priority
        src={"/assets/icons/plusSign.svg"}
        width={18}
        height={18}
        alt="Trash icon"
      />
    </QuantityColContainer>
  );

  const deleteContent = (
    <Image
      onClick={() => dispatch(removeItem(item.id))}
      style={{ cursor: "pointer" }}
      priority
      src={"/assets/icons/trash.svg"}
      width={18}
      height={18}
      alt="Trash icon"
    />
  );

  if (screenSize.width < 600) {
    return (
      <ContainerMobile>
        <ImageContainer>
          <Image
            priority
            src={image}
            layout="fill"
            objectFit="contain"
            alt="Bag icon"
          />
        </ImageContainer>
        <ContentContainerMobile>
          <div id="row">
            <MovieTitleText>{title}</MovieTitleText>
            <TotalPriceText>{`R$ ${priceFormatting(price)}`}</TotalPriceText>
            {deleteContent}
          </div>
          <div id="row">
            {quantityContent}
            <div>
              <TotalPriceLabel>subtotal</TotalPriceLabel>
              <TotalPriceText>{`R$ ${priceFormatting(
                quantity * price
              )}`}</TotalPriceText>
            </div>
          </div>
        </ContentContainerMobile>
      </ContainerMobile>
    );
  }

  return (
    <Container>
      <div id="col">
        <ProductColContainer>
          <ImageContainer>
            <Image
              priority
              src={image}
              layout="fill"
              objectFit="contain"
              alt="Bag icon"
            />
          </ImageContainer>
          <div id="textInformation">
            <div>{title}</div>
            <span>{`R$ ${priceFormatting(price)}`}</span>
          </div>
        </ProductColContainer>
      </div>
      <div id="col">{quantityContent}</div>
      <div id="col">
        <TotalPriceText>{`R$ ${priceFormatting(
          quantity * price
        )}`}</TotalPriceText>
      </div>
      <div id="col">
        <ActionsColContainer>{deleteContent}</ActionsColContainer>
      </div>
    </Container>
  );
};

export default CartItem;
