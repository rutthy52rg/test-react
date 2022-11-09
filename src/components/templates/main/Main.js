import classNames from "classnames";
import styled from "styled-components";
import "./Main.css";
const CustomizedMain = styled.main`
  width: ${(styleProps) => styleProps.width};
`;

const Main = ({ title, children, sectionSize, className, ...props }) => {
  return (
    <CustomizedMain {...props} className={classNames("row", className)}>
      <h1 className="col s12 center">{title}</h1>
      <section className={`col ${sectionSize}`}>{children}</section>
    </CustomizedMain>
  );
};

export default Main;
