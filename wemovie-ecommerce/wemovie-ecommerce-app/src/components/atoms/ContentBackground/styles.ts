import styled from "styled-components";

import { ContentBackgroundProps } from "./types";

export const Container = styled.div<ContentBackgroundProps>`
  background-color: ${(props) => props.background ?? "transparent"};
  border-radius: 4px;
  padding: 16px;
`;
