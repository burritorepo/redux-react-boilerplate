import React from "react";
import TextField from '@material-ui/core/TextField';

import './textarea.component.scss';

function UITextarea(props) {
  const {
    className,
    name,
    id,
    value,
    onChange,
    label,
    rows = "4",
  } = props;
  return (
    <TextField
      className={`ui-textarea ${className}`}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      label={label}
      multiline
      rows={rows}
    />
  )
}

export {
  UITextarea
}
