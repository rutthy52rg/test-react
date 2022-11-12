import classNames from "classnames";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Card.css";

const CustomizedCard = styled.div`
  border-radius: ${(styleProps) => styleProps.radius};
  margin-right: ${(styleProps) =>
    styleProps.marginR ? styleProps.marginR : "0rem"};
`;

const Card = ({ colSize, className, alt, linkDetail, icon, ...props }) => {
  const { name, price, createdAt, photo, advertags } = props;
  return (
    <CustomizedCard className={classNames(`col ${colSize}`, className)}>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={photo} alt={alt} width="50px" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {name} |
            {createdAt ? (
              <time dateTime={createdAt} className="active">
                {formatDistanceToNow(new Date(createdAt))}
              </time>
            ) : (
              ""
            )}
          </span>
          <p>{price}</p>
          <p>
            {advertags.length
              ? advertags.map((tag, idx) => <span key={idx}>{tag}</span>)
              : ""}
          </p>
          <p>
            <Link to={linkDetail}>See more</Link>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{name}</span>
          <p>{name}</p>
        </div>
      </div>
    </CustomizedCard>
  );
};

export default Card;
