import classNames from "classnames";
import styled from "styled-components";
const CustomizedActionLink = styled.a`
  color: ${(styleProps) => styleProps.colorTheme};
  font-weight: bold;
  min-width: max-content;
  display: flex;
  align-items: center;
  line-height: initial;
  &:hover {
    color: ${(styleProps) => styleProps.hoverColor};
    cursor: pointer;
  }
`;
const CustomizedIcon = styled.i`
  color: ${(styleProps) => styleProps.colorTheme};
  line-height: initial;
  height: initial !important;
  margin: 0px 5px;
`;

const ActionLink = ({
  className,
  tag,
  icon,
  haveIcon,
  iconColor,
  ...props
}) => {
  return (
    <CustomizedActionLink {...props} className={classNames("", className)}>
      {tag}
      {haveIcon ? (
        <CustomizedIcon className="material-icons">{icon}</CustomizedIcon>
      ) : (
        ""
      )}
    </CustomizedActionLink>
  );
};

export default ActionLink;
