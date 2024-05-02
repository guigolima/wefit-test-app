import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import ContentBackground from "@/components/atoms/ContentBackground";
import { useAppSelector } from "@/redux/hooks";
import { clearCart, selectCart } from "@/redux/slices/cartSlice";
import CartItem from "@/components/molecules/CartItem";
import { calculateTotalValue } from "@/utils/calculateTotalValue";
import { priceFormatting } from "@/utils/priceFormatting";
import Button from "@/components/atoms/Button";

import { Content, FooterContainer } from "./styles";

const CartList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useAppSelector(selectCart);

  const totalValue = () => {
    let total = calculateTotalValue(cart.items);
    return priceFormatting(total);
  };

  return (
    <ContentBackground background="white">
      <Content>
        <div id="col">Produto</div>
        <div id="col">QTD</div>
        <div id="col">Subtotal</div>
        <div id="col"></div>
      </Content>
      {cart.items.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <FooterContainer>
        <div>
          <Button
            message="Finalizar pedido"
            buttonAction={() => {
              dispatch(clearCart());
              router.push("/successfulPurchase");
            }}
          />
        </div>
        <div id="footerRightContainer">
          <span>total</span>
          <h1>{`R$ ${totalValue()}`}</h1>
        </div>
      </FooterContainer>
    </ContentBackground>
  );
};

export default CartList;
