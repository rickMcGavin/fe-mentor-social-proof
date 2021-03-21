import styled, { css } from "styled-components";

const CardStyled = styled.div`
  ${({ theme = {}, multiplier = 1 }) => {
    const { colors = {}, breakpoint = '' } = theme;
    return css`
      background-color: ${colors.primary.dark};
      border-radius: 10px;
      color: ${colors.neutral.light};
      padding: 40px 32px 36px;
      @media ${breakpoint} {
        margin-top: ${multiplier * 1.5}rem;
      }

      &:not(:last-child) {
        margin-bottom: 16px;
        @media ${breakpoint} {
          margin-bottom: 0;
        }
      }

      img {
        border-radius: 50%;
      }

      h2,
      .verified-buyer {
        font-size: 0.875rem;
      }
      h2 {
        font-weight: 500;
      }

      .verified-buyer {
        color: ${colors.primary.light};
        line-height: 1.4;
        font-size: 0.85rem;
      }

      .buyer-info {
        align-items: center;
        display: flex;
        margin-bottom: 30px;
        gap: 24px;
      }

      p {
        font-size: 0.875rem;
      }
    `;
  }}
`;

export default CardStyled;
