import styled from "styled-components";
import "./radioButton.css";

const CustomizedRadioButton = styled.input`
  margin: ${(styleProps) => styleProps.inputmargin};
`;

const RadioButton = ({
  children,
  labelClassName,
  inputClassName,
  label,
  colsize,
  isCheck,
  ...props
}) => {
  return (
    <CustomizedRadioButton
      className={`input-field col ${colsize}`}
      type="checkbox"
      {...props}
    >
      {children}
    </CustomizedRadioButton>
  );
};

export default RadioButton;
