import React from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './select.component.scss';

function UISelect(props) {
  const {
    className,
    name,
    id,
    value,
    onChange,
    options = [{ key: 'Argentina', value: '0' }, { key: 'Peru', value: '1' }],
    placeholder
  } = props;
  return (
    <Select
      className={`ui-select ${className}`}
      name={name}
      id={id}
      value={value}
      onChange={onChange}>
      <MenuItem value="">
        {placeholder}
      </MenuItem>
      {options.map(option => {
        return (
          <MenuItem value={option.value}>
            {option.key}
          </MenuItem>
        );
      })}
    </Select>
  )
}

export {
  UISelect
}
