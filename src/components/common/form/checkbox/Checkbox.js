import classNames from "classnames";
import styled from "styled-components";
import "./checkbox.css";

const CustomizedCheckbox = styled.input`
  margin: ${(styleProps) => styleProps.inputmargin};
`;

const Checkbox = ({
  labelClassName,
  inputClassName,
  label,
  colsize,
  isCheck,
  ...props
}) => {
  return (
    <div className={`input-field col ${colsize}`}>
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
