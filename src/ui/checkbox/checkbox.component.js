import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

import './checkbox.component.scss';

function UICheckbox(props) {
  const {
    className,
    name,
    id,
    checked = false,
    onChange
  } = props;
  return (
    <Checkbox
      className={`ui-button ${className}`}
      name={name}
      id={id}
      checked={checked}
      onChange={onChange}
    />
  )
}

export {
  UICheckbox
}
