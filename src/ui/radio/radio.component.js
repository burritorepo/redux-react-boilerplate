import React from "react";
import Radio from '@material-ui/core/Radio';

import './radio.component.scss';

function UIRadio(props) {
  const {
    className,
    name,
    id,
    value="a",
    onChange,
    checked
  } = props;
  return (
    <Radio
      className={`ui-input-radio ${className}`}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      checked={checked}
    />
  )
}

export {
  UIRadio
}
