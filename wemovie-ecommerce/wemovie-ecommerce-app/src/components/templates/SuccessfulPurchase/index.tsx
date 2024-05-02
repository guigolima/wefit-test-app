import React from "react";
import router from "next/router";

import PageContainer from "@/components/atoms/PageContainer";
import Header from "@/components/organisms/Header";
import MessageDisplay from "@/components/organisms/MessageDisplay";
import ContentBackground from "@/components/atoms/ContentBackground";

const SuccessfulPurchaseTemplate = () => {
  const returnToHomeAction = () => {
    router.push("/");
  };

  return (
    <PageContainer>
      <Header />
      <ContentBackground>
        <MessageDisplay
          message={"Compra realizada com sucesso!"}
          image={"/assets/images/successfulPurchase.svg"}
          buttonAction={returnToHomeAction}
          buttonMessage={"Voltar"}
        />
      </ContentBackground>
    </PageContainer>
  );
};

export default SuccessfulPurchaseTemplate;
