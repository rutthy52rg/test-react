import classNames from "classnames";
import styled from "styled-components";
import "./Main.css";
const CustomizedMain = styled.main`
  width: ${(styleProps) => styleProps.width};
`;

const Main = ({
  username,
  isLoged,
  linkEvent,
  title,
  children,
  sectionclassname,
  mainclassname,
  ...props
}) => {
  return (
    <CustomizedMain {...props} className={classNames("row", mainclassname)}>
      <h1 className="col s12 center">{title}</h1>
      <section
        className={classNames("col", sectionclassname)}
        // className={`col ${sectionClass}`}
      >
        {children}
      </section>
    </CustomizedMain>
  );
};

export default Main;
