import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;

  #col {
    flex: 1 1 0;
    width: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 90px;
  min-height: 115px;
  position: relative;
`;

export const ProductColContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  #textInformation {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-weight: 700;
    font-size: 14px;

    span {
      font-size: 16px;
    }
  }
`;

export const ActionsColContainer = styled.div`
  display: flex;
  align-items: right;
  justify-content: end;
  gap: 8px;
`;

export const QuantityColContainer = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;

  img {
    cursor: pointer;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 62px;
    height: 26px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
  }
`;

export const MovieTitleText = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #2f2e41;
  word-break: break-word;
`;

export const TotalPriceLabel = styled.div`
  font-size: 12px;
  color: #999999;
  text-transform: uppercase;
`;

export const TotalPriceText = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #2f2e41;
`;

export const ContainerMobile = styled.div`
  display: flex;
`;

export const ContentContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 115px;
  width: calc(100% - 90px);
  padding: 10px 16px;

  #row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-left: 16px;
  }
`;
