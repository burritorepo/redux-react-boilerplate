import React from "react";
import TextField from '@material-ui/core/TextField';
import './input.component.scss';

function UIInput(props) {
  const {
    className,
    name,
    id,
    type,
    placeholder,
    onChange,
    label,
    value,
    defaultValue,
    margin = "normal"
  } = props;
  return (
    <TextField
      className={`ui-button ${className}`}
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      label={label}
      value={value}
      onChange={onChange}
      margin={margin}
      defaultValue={defaultValue}
    />
  )
}

export {
  UIInput
}
