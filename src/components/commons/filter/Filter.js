import classNames from "classnames";
import styled from "styled-components";
import "./filter.css";
const CustomizedFilter = styled.div`
  & h5 {
  }
`;

const Filter = ({ classnames, children, ...props }) => {
  return (
    <CustomizedFilter
      {...props}
      className={classNames("row filter-box", classnames)}
    >
      <h5 className="col s12">Filter and Search</h5>
      {children}
    </CustomizedFilter>
  );
};

export default Filter;
