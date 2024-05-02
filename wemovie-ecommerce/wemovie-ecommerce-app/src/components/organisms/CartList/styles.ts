import styled from "styled-components";

export const Content = styled.div`
  display: flex;

  #col {
    flex: 1;
    color: #999999;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #999999;
  margin-top: 10px;
  padding-top: 20px;

  #footerRightContainer {
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: 700;

    span {
      font-size: 14px;
      color: #999999;
      text-transform: uppercase;
    }

    h1 {
      font-size: 24px;
      color: #2f2e41;
    }
    @media only screen and (max-width: 768px) {
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;
