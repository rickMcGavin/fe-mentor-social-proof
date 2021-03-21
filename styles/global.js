import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({ theme = {} }) => {
    const { colors = {}, breakpoint = '' } = theme;
    return css`
      /* BEGIN RESET */

      /* Box sizing rules */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      /* Remove default padding */
      ul[class],
      ol[class] {
        padding: 0;
      }

      /* Remove default margin */
      body,
      h1,
      h2,
      h3,
      h4,
      p,
      ul[class],
      ol[class],
      li,
      figure,
      figcaption,
      blockquote,
      dl,
      dd {
        margin: 0;
      }

      /* Set core body defaults */
      body {
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.6;
      }

      /* Remove list styles on ul, ol elements with a class attribute */
      ul[class],
      ol[class] {
        list-style: none;
      }

      /* A elements that don't have a class get default styles */
      a:not([class]) {
        text-decoration-skip-ink: auto;
      }

      /* Make images easier to work with */
      img {
        max-width: 100%;
        display: block;
      }

      /* Natural flow and rhythm in articles by default */
      article > * + * {
        margin-top: 1em;
      }

      /* Inherit fonts for inputs and buttons */
      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      /* Remove all animations and transitions for people that prefer not to see them */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      /* END RESET */

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: "Spartan", sans-serif;
        font-size: 0.9375rem; /* 15px */
      }
      body {
        background-color: ${colors.neutral.white};
        background-image: url("/bg-pattern-top-mobile.svg");
        background-repeat: no-repeat;
        background-size: 374px 232px;
        background-position: top 0 left 0;
        color: ${colors.primary.dark};

        @media ${breakpoint} {
          background-image: url("/bg-pattern-top-desktop.svg"), url("/bg-pattern-bottom-desktop.svg");
          background-size: 584px 362px, 1085px 673px;
          background-position: top 0 left 0, bottom 0 right 0;
        }
      }

      h1 {
        font-size: 2.1rem;
        line-height: 1.025;
      }
    `;
  }}
`;

export default GlobalStyle;
