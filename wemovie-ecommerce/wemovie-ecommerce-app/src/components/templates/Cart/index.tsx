import React from "react";
import router from "next/router";

import PageContainer from "@/components/atoms/PageContainer";
import Header from "@/components/organisms/Header";
import MessageDisplay from "@/components/organisms/MessageDisplay";
import ContentBackground from "@/components/atoms/ContentBackground";
import { useAppSelector } from "@/redux/hooks";
import { selectCart } from "@/redux/slices/cartSlice";
import CartList from "@/components/organisms/CartList";

const CartTemplate = () => {
  const cart = useAppSelector(selectCart);

  const ReturnHomeAction = () => {
    router.push("/");
  };

  return (
    <PageContainer>
      <Header />
      <ContentBackground>
        {cart.items.length ? (
          <CartList />
        ) : (
          <MessageDisplay
            message={"Parece que não há nada aqui :("}
            image={"/assets/images/reloadPage.svg"}
            buttonAction={ReturnHomeAction}
            buttonMessage={"Voltar"}
          />
        )}
      </ContentBackground>
    </PageContainer>
  );
};

export default CartTemplate;
