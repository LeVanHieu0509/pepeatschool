import styled, { css } from "styled-components";

export const LoadingWrapper = styled.div<{
  isFullContent: boolean;
  isOverlap: boolean;
  top: number;
}>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isFullContent, isOverlap, top }) =>
    isFullContent
      ? css`
          position: absolute;
          z-index: 100;
          top: ${() => (top ? `${top}px` : 0)};
          right: 0;
          bottom: 0;
          left: 0;

          background: ${({ theme }) => (isOverlap ? "transparent" : "green")};
        `
      : null}
`;
