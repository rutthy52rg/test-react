import classNames from "classnames";
import styled from "styled-components";
import "./Main.css";
const CustomizedMain = styled.main`
  width: ${(styleProps) => styleProps.width};
`;

const Main = ({
  title,
  children,
  sectionClassName,
  mainClassName,
  ...props
}) => {
  return (
    <CustomizedMain {...props} className={classNames("row", mainClassName)}>
      <h1 className="col s12 center">{title}</h1>
      <section
        className={classNames("col", sectionClassName)}
        // className={`col ${sectionClass}`}
      >
        {children}
      </section>
    </CustomizedMain>
  );
};

export default Main;
