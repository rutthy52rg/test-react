import classNames from "classnames";
import styled from "styled-components";
import "./Card.css";

const CustomizedCard = styled.div`
  border-radius: ${(styleProps) => styleProps.radius};
  margin-right: ${(styleProps) =>
    styleProps.marginR ? styleProps.marginR : "0rem"};
`;

const Card = ({
  colSize,
  className,
  title,
  image,
  alt,
  linkDetail,
  description,
  ...props
}) => {
  return (
    <CustomizedCard
      {...props}
      className={classNames(`col ${colSize}`, className)}
    >
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={image} alt={alt} width="50px" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title}
            <i className="material-icons right">Description</i>
          </span>
          <p>
            <a href="{linkDetail}"> See detail </a>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {title}
            <i className="material-icons right">Close</i>
          </span>
          <p>{description}</p>
        </div>
      </div>
    </CustomizedCard>
  );
};

export default Card;
