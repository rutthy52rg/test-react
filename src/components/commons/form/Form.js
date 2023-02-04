import classNames from "classnames";
import styled from "styled-components";
const CustomizedForm = styled.form`
  color: ${(styleProps) => styleProps.radius};
`;

const Form = ({ formClassName, children, ...props }) => {
  return (
    <CustomizedForm {...props} className={classNames("", formClassName)}>
      {children}
    </CustomizedForm>
  );
};

export default Form;
