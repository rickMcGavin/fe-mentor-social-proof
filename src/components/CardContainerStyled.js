import styled, { css } from "styled-components";

const CardContainerStyled = styled.div`
  ${({ theme = {} }) => {
    const { breakpoint } = theme;
    return css`
      @media ${breakpoint} {
        align-items: flex-start;
        display: flex;
        gap: 32px;
      }
    `;
  }}
`;

export default CardContainerStyled;
