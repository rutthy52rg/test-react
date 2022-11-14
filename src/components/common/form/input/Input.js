import classNames from "classnames";
import styled from "styled-components";
import "./input.css";

const CustomizedInput = styled.input`
  border-radius: ${(styleProps) => styleProps.radius};
  margin: ${(styleProps) => styleProps.margin};
`;

const Input = ({ className, label, colsize, ...props }) => {
  return (
    <div className={`input-field col ${colsize}`} {...props}>
      <CustomizedInput {...props} className={classNames("", className)} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Input;

/* DESTRUCTURING 
 const obj = {a:2, b:5, c:8}
 const { a } = obj es lo mismo que const a = obj.a
 const { a, ...rest} = obj el resultado es  rest = {b:5, c:8} 
*/

// const props = ((props, styleProps) => ( {...props, ...styleProps}));
