import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  medium = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  children,
  onClick,
  leftIcon,
  rightIcon,
  className,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if(disabled) {
    delete props.onClick;
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    medium,
    large,
    text,
    disabled,
    rounded,
    [className] : className,
  });

  return (
    <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

    </Comp>
  );
}

Button.propTypes = {
  to : PropTypes.string,
  href : PropTypes.string,
  primary : PropTypes.bool,
  outline : PropTypes.bool,
  small : PropTypes.bool,
  medium : PropTypes.bool,
  large : PropTypes.bool,
  text : PropTypes.bool,
  disabled : PropTypes.bool,
  rounded : PropTypes.string,
  children : PropTypes.node.isRequired,
  onClick : PropTypes.func,
  leftIcon : PropTypes.node,
  rightIcon : PropTypes.node,
  className : PropTypes.string,
}

export default Button;
