import "./switch.css";

const Switch = ({ label1, label2, ...props }) => {
  return (
    <div className="switch" {...props}>
      <label>
        {label1}
        <input type="checkbox" />
        <span className="lever"></span>
        {label2}
      </label>
    </div>
  );
};

export default Switch;
