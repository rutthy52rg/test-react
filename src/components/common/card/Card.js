import classNames from "classnames";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../button/Button";
import "./Card.css";

const CustomizedCard = styled.div`
  margin-right: ${(styleProps) =>
    styleProps.marginR ? styleProps.marginR : "0rem"};
  width: ${(styleProps) => styleProps.cardWidth};
  & .card {
    height: ${(styleProps) => styleProps.cardHeight};
    & .card-image {
      height: ${(styleProps) => styleProps.imageHeight};;
      width: 100%;
      overflow:hidden;
      & img, .no-image{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }
      & i {
        font-size: ${(styleProps) => styleProps.iconSize};
        color: #f5f5f5;
        justify-content: ${(styleProps) => styleProps.imageAlign} ;
        align-items: center;
        display:flex;
      }
    }
  }  
  }
`;

const Card = ({ colsize, classname, ...props }) => {
  const {
    title,
    image,
    date,
    alt,
    icon1,
    icon2,
    booleantag,
    booleanlabeltrue,
    booleanlabelfalse,
    text1,
    text2,
    text3,
    text4,
    textarray,
    link1,
    labellink1,
    link2,
    labellink2,
  } = props;

  return (
    <CustomizedCard
      className={classNames(`col ${colsize}`, classname)}
      {...props}
    >
      <div className="card">
        <div className={`card-tag-${booleantag}`}>
          {booleantag ? booleanlabeltrue : booleanlabelfalse}
        </div>
        <div className="card-image waves-effect waves-block waves-light">
          {image ? (
            <img className="activator" src={image} alt={alt} width="50px" />
          ) : (
            <div className="no-image">
              <i className="material-icons">photo_camera</i>
            </div>
          )}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title} |
            {date ? (
              <time dateTime={date} className="active">
                {formatDistanceToNow(new Date(date))}
              </time>
            ) : (
              ""
            )}
            <i className="material-icons right">{icon1}</i>
          </span>
          {text1 ? (
            <p>
              {" "}
              <strong>{text1} €</strong>
            </p>
          ) : (
            ""
          )}
          {text2 ? <p>{text2}</p> : ""}
          {text3 ? <p>{text3}</p> : ""}
          {text4 ? <p>{text4}</p> : ""}
          <p>
            {textarray && textarray.length
              ? textarray.map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: "#ffd9a8",
                      margin: "20px 10px 0px 0px",
                      padding: "2px 10px",
                      borderRadius: "20px",
                      lineHeight: "0px",
                    }}
                  >
                    {item}
                  </span>
                ))
              : ""}
          </p>
        </div>
        <div className="card-action auto-between">
          {link1 ? (
            <Link className="card-link" to={link1}>
              {labellink1}
            </Link>
          ) : (
            ""
          )}
          {link2 ? (
            <Button
              as={Link}
              to={link2}
              className="btn-small pink"
              radius="20px"
            >
              {labellink2}
            </Button>
          ) : (
            ""
          )}
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">{icon2}</i>
          </span>
          <p>{title}</p>
          {text1 ? <p>{text1}</p> : ""}
          {text2 ? <p>{text2}</p> : ""}
          {text3 ? <p>{text3}</p> : ""}
          {text4 ? <p>{text4}</p> : ""}
        </div>
      </div>
    </CustomizedCard>
  );
};

export default Card;
