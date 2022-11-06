import classNames from "classnames";
import styled from "styled-components";

const CustomizedButton = styled.button`
  border-radius: ${(styleProps) => styleProps.radius};
  margin: 0.5rem 1rem;
  width: 11rem;
  opacity: ${(styleProps) => (styleProps.disabled ? 0.5 : 1)};
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
