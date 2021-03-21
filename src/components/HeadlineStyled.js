import styled, { css } from "styled-components";

const HeadlineStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, breakpoint = '' } = theme;
    return css`
      padding-right: 16px;
      text-align: center;

      @media ${breakpoint} {
        text-align: left;
      }

      h1 {
        margin-bottom: 24px;

        @media ${breakpoint} {
          font-size: 3rem;
          margin-bottom: 16px;
          max-width: 14ch;
        }
      }

      p {
        margin-bottom: 40px;

        @media ${breakpoint} {
          color: ${colors.neutral.dark};
          font-size: 1rem;
          margin-bottom: 0;
          max-width: 38ch;
        }
      }
    `;
  }}
`;

export default HeadlineStyled;
