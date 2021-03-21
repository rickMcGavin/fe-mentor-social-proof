import styled, { css } from "styled-components";

const ReviewBoxStyled = styled.div`
  ${({ theme = {}, multiplier = 1 }) => {
    const { colors = {}, breakpoint = '' } = theme;
    return css`
      background: ${colors.neutral.light};
      border-radius: 10px;
      padding: 16px;
      text-align: center;

      @media ${breakpoint} {
        align-items: center;
        display: flex;
        margin-right: ${multiplier*3}rem;
        margin-left: auto;
        max-width: 448px;
        padding: 16px 32px;
      }

      &:not(:last-child) {
        margin-bottom: 16px;
      }

      &:last-child {
        margin-bottom: 50px;

        @media ${breakpoint} {
          margin-bottom: 0;
        }
      }

      svg {
        min-width: 17px;
        min-height: 16px;
      }

      svg:not(:last-of-type) {
        margin-right: 8px;
      }

      p {
        font-weight: 700;
        margin-top: 6px;

        @media ${breakpoint} {
          margin-left: 32px;
        }
      }
    `;
  }}
`;

export default ReviewBoxStyled;
