import { css } from "styled-components";

const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

const tablet = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};
const large = (props) => {
  return css`
    @media only screen and (max-width: 1090px) {
      ${props}
    }
  `;
};

export { mobile, tablet, large };
