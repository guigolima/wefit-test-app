import styled from "styled-components";

export const Container = styled.div<{ color?: string }>`
  background-color: ${(props) => (props.color ? props.color : "#009edd")};
  width: 100%;
  height: 40px;
  border-radius: 4px;
  gap: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 8px;
  transition: 0.2s;

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    color: white;
  }
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
