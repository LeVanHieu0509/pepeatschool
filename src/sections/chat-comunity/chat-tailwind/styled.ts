import styled from "styled-components";
import { device } from "styles/media";

export const ChatTailwindWrapper = styled.div``;

export const ContentWrapper = styled.div`
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const ItemBlock = styled.div`
  padding: 24px;

  @media ${device.mobile} {
    padding: 0;
  }
`;

export const ItemWrapper = styled.div`
  width: 50%;

  @media ${device.mobile} {
    width: 100%;
  }
`;
