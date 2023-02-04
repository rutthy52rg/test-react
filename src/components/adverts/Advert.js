import classNames from "classnames";

const Advert = ({ className, name, price, photo, tags, id, sale }) => {
  return (
    <div className={classNames("card mb-3", className)}>
      <div className="row">name, price, photo,tags, id, sale</div>
    </div>
  );
};
export default Advert;
