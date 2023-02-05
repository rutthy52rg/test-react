import classNames from "classnames";
import M from "materialize-css/dist/js/materialize.min.js";
import "./select.css";

const Select = ({
  className,
  label,
  hasdefault,
  optionarray,
  valuedefault,
  colsize,
  ...props
}) => {
  M.AutoInit();

  // console.log("select", optionarray);
  return (
    <div className={`input-field col ${colsize}`}>
      <select className={classNames("", className)} {...props}>
        {hasdefault === "true" ? (
          <option key={valuedefault} value={valuedefault}>
            {valuedefault}
          </option>
        ) : (
          ""
        )}
        {optionarray
          ? optionarray.map((ele, idx) => (
              <option key={idx} value={ele}>
                {ele}
              </option>
            ))
          : ""}
      </select>
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Select;

/* DESTRUCTURING 
 const obj = {a:2, b:5, c:8}
 const { a } = obj es lo mismo que const a = obj.a
 const { a, ...rest} = obj el resultado es  rest = {b:5, c:8} 
*/

// const props = ((props, styleProps) => ( {...props, ...styleProps}));
