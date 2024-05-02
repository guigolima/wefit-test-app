import React from "react";

import { Container, Content } from "./styles";

import { PageContainerProps } from "./types";

const PageContainer: React.FC<PageContainerProps> = ({
  children,
}: PageContainerProps) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default PageContainer;
