import styled, { css } from "styled-components";

const TopContainerStyled = styled.div`
  ${({ theme }) => {
    const { breakpoint = '' } = theme;
    return css`
      @media ${breakpoint} {
        display: flex;
        margin-bottom: 80px;

        & > div {
          flex: 1 1 50%;
        }
      }
      .reviews-container {
        @media ${breakpoint} {
          padding-top: 16px;
        }
      }
    `;
  }}

`;

export default TopContainerStyled;
