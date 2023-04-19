import React from "react";
import styles from "@/components/Button/Button.module.scss";
import { VariantsEnum } from "@/enums/VariantsEnum";
import { Icon } from "@iconify/react";
import Icons from "@/variables/Icons";
import Ibutton from "./IButton";
import { Sizes } from "@/enums/Sizes";
import { classnames } from "@/helpers/component";

const Button: React.FC<Ibutton> = ({
  variant = VariantsEnum.default,
  children,
  fullWidth,
  leftIcon,
  rightIcon,
  loading,
  size = Sizes.md,
  ...rest
}) => {
  const { className, ...attr } = rest;

  const classes = {
    buttonRoot: classnames([
      styles.button,
      styles[`variant-${variant}`],
      rest.disabled && styles.disabled,
      fullWidth && styles.fullWidth,
      styles[`size-${size}`],
      className,
    ]),
  };


  return (
    <button className={classes.buttonRoot} {...attr}>
      {loading && <Icon icon={Icons.Loading} />}
      {!loading && leftIcon !== undefined && leftIcon}
      {children}
      {rightIcon !== undefined && rightIcon}
    </button>
  );
};

export default Button;
