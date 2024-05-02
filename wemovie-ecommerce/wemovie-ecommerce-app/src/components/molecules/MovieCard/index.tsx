import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import Button from "@/components/atoms/Button";
import ContentBackground from "@/components/atoms/ContentBackground";
import { priceFormatting } from "@/utils/priceFormatting";
import { addItem, selectCart } from "@/redux/slices/cartSlice";
import { useAppSelector } from "@/redux/hooks";

import { Content, ImageContainer, MoviePrice, MovieTitle } from "./styles";

import { MovieCardProps } from "./types";

const MovieCard = ({ item }: MovieCardProps) => {
  const dispatch = useDispatch();
  const cart = useAppSelector(selectCart);

  const { image, title, price } = item;

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const handleLocateItemInCart = () => {
    let cartItem = cart.items.find((asd) => asd.id === item.id);
    return cartItem;
  };

  return (
    <ContentBackground background="white">
      <Content>
        <ImageContainer>
          <Image
            priority
            src={image}
            layout="fill"
            objectFit="contain"
            alt="Bag icon"
          />
        </ImageContainer>
        <MovieTitle>{title}</MovieTitle>
        <MoviePrice>{`R$ ${priceFormatting(price)}`}</MoviePrice>
        <Button
          ammount={handleLocateItemInCart()?.quantity}
          color={handleLocateItemInCart() && "#099b00"}
          isAddToCart
          buttonAction={() => handleAddItem()}
        />
      </Content>
    </ContentBackground>
  );
};

export default MovieCard;
