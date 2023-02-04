import classNames from "classnames";
import styled from "styled-components";

const CustomizedNoResultImage = styled.div`
  background: ${(styleProps) => styleProps.colorBg};
  font-weight: bold;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  line-height: initial;
  display: flex;
  justify-content: ${(styleProps) => styleProps.justifyAlign};
`;
const CustomizedIcon = styled.i`
  color: ${(styleProps) => styleProps.colorIcon};
  font-size: ${(styleProps) => styleProps.sizeIcon};
  margin: ${(styleProps) => styleProps.alignIcon};
`;

const NoResultImage = ({
  boxclasses,
  iconclasses,
  tag,
  text,
  icon,
  ...props
}) => {
  return (
    <CustomizedNoResultImage
      {...props}
      className={classNames("no-result-image", boxclasses)}
    >
      {icon ? (
        <CustomizedIcon
          className={classNames("material-icons", iconclasses)}
          {...props}
        >
          {icon}
        </CustomizedIcon>
      ) : (
        ""
      )}
      {text}
    </CustomizedNoResultImage>
  );
};

export default NoResultImage;
