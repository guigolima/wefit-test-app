import styled from "styled-components";

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 16px;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
