import React from "react";

import { Container } from "./styles";

import { ContentBackgroundProps } from "./types";

const ContentBackground: React.FC<ContentBackgroundProps> = ({
  children,
  background,
}: ContentBackgroundProps) => {
  return <Container background={background}>{children}</Container>;
};

export default ContentBackground;
