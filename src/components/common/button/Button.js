import styled from "styled-components";

const accentColor = '#ff00ff';
const Button = styled.button`
  border-radius: ${styleProps => styleProps.radius};
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${accentColor};
  color: white;
  border: 2px solid white;
  opacity: ${styleProps => (styleProps.disabled ? 0.5 : 1)};
    &:hover{
        background-color: ${styleProps => styleProps.variant === "primary" ? "blue" : "green"}
    }
`;

export default Button;
