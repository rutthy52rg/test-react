import classNames from "classnames";
import { Fragment } from "react";

const PageContainerOutlet = ({ sectionclassname, title, children }) => {
  return (
    <Fragment>
      <h2 className="col s12 center">{title}</h2>
      {/* children serán los layouts de cada sección. ej. TwitterPage*/}
      <section className={classNames("col", sectionclassname)}>
        {children}
      </section>
    </Fragment>
  );
};
export default PageContainerOutlet;
