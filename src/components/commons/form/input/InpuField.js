import classNames from "classnames";
import "./input.css";

const InputField = ({ ...props }) => {
  const { inputclassName, label, placeholder, colsize } = props;
  return (
    <div className={`file-field input-field col ${colsize}`} {...props}>
      <div className="btn">
        <span>{label}</span>
        <input type="file" />
      </div>
      <div className="file-path-wrapper">
        <input
          className={classNames("file-path validate", inputclassName)}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputField;

/* DESTRUCTURING 
 const obj = {a:2, b:5, c:8}
 const { a } = obj es lo mismo que const a = obj.a
 const { a, ...rest} = obj el resultado es  rest = {b:5, c:8} 
*/

// const props = ((props, styleProps) => ( {...props, ...styleProps}));
