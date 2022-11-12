import classNames from "classnames";
import styled from "styled-components";

const CustomizedButton = styled.button`
  border-radius: ${(styleProps) => styleProps.radius};
  margin: ${(styleProps) => styleProps.margin};
  width: 11rem;
  opacity: ${(styleProps) => (styleProps.disabled ? 0.5 : 1)};
  border: ${(styleProps) => (styleProps.outline ? "1px" : "0px")};
  border-color: ${(styleProps) => styleProps.colorTheme};
  border-style: solid;
  background-color: ${(styleProps) =>
    styleProps.outline ? "transparent" : styleProps.colorTheme};
  &:hover {
    background-color: ${(styleProps) =>
      styleProps.outline ? styleProps.colorTheme : "inherit"};
  }
`;

const Button = ({ className, ...props }) => {
  // console.log(props);
  return (
    <CustomizedButton
      {...props}
      className={classNames("waves-effect", className)}
    ></CustomizedButton>
  );
};

export default Button;
