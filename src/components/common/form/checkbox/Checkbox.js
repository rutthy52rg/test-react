import classNames from "classnames";
import styled from "styled-components";
import "./checkbox.css";

const CustomizedCheckbox = styled.input`
  margin: ${(styleProps) => styleProps.inputMargin};
`;

const Checkbox = ({
  labelClassName,
  inputClassName,
  label,
  colSize,
  isCheck,
  ...props
}) => {
  return (
    <div className={`input-field col ${colSize}`}>
      <label className={classNames("", labelClassName)}>
        <CustomizedCheckbox
          className={classNames("filled-in", inputClassName)}
          type="checkbox"
          {...props}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
