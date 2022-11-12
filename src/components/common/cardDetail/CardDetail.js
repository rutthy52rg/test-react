import classNames from "classnames";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import styled from "styled-components";

const CustomizedCardDetail = styled.div`
  border-radius: ${(styleProps) => styleProps.radius};
  margin-right: ${(styleProps) =>
    styleProps.marginR ? styleProps.marginR : "0rem"};
`;

const CardDetail = ({ colSize, className, alt, ...props }) => {
  const { name, photo, price, createdAt, advertags } = props;

  return (
    <CustomizedCardDetail
      {...props}
      className={classNames(`col ${colSize}`, className)}
    >
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={photo} alt={alt} width="50px" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            <p>
              {name} |
              {createdAt ? (
                <time dateTime={createdAt} className="active">
                  {formatDistanceToNow(new Date(createdAt))}
                </time>
              ) : (
                ""
              )}
            </p>
          </span>
          <p>{price}</p>
          {advertags
            ? advertags.map((tag, idx) => <span key={idx}> {tag} </span>)
            : ""}
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4"></span>
        </div>
      </div>
    </CustomizedCardDetail>
  );
};

export default CardDetail;
