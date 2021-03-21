import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme = {} }) => {
    const { breakpoint = '' } = theme;
    return css`
      padding: 80px 24px;

      @media ${breakpoint} {
        padding: 128px 166px 100px;
      }
    `;
  }}
`;

export default Container;
