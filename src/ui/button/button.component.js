import React from "react";
import Button from '@material-ui/core/Button';
import './button.component.scss';

function UIButton(props) {
  const {
    className,
    name,
    id,
    color,
    children,
    type,
    variant = "contained"
  } = props;

  return (
    <Button 
      className={`ui-button ${className}`} 
      name={name}
      id={id}
      type={type}
      color={color}
      variant={variant}
    >
    {children}
    </Button>
  )
}

export {
  UIButton
}
