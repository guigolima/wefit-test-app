import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  color: #ffffff;
  padding: 0 16px;
`;

export const PageTitle = styled.span`
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export const RightSideNav = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 600;
  cursor: pointer;

  #text-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  h1 {
    font-size: 14px;

    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }

  h2 {
    color: #999999;
    font-size: 12px;
  }
`;
