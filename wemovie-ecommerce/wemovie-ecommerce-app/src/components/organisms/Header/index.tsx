import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Container, PageTitle, RightSideNav } from "./styles";
import { selectCart } from "@/redux/slices/cartSlice";
import { useAppSelector } from "@/redux/hooks";

const Header = () => {
  const router = useRouter();
  const cart = useAppSelector(selectCart);

  const totalQuantity = cart.items.reduce((total, item) => {
    const quantity = item.quantity || 0;
    return total + quantity;
  }, 0);

  return (
    <Container>
      <PageTitle onClick={() => router.push("/")}>WeMovies</PageTitle>
      <RightSideNav onClick={() => router.push("/cart")}>
        <div id="text-content">
          <h1>Meu Carrinho</h1>
          <h2>{`${totalQuantity} itens`}</h2>
        </div>
        <Image
          priority
          src="/assets/icons/bag.svg"
          height={24}
          width={24}
          alt="Bag icon"
        />
      </RightSideNav>
    </Container>
  );
};

export default Header;
