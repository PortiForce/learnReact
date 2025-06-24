import React from "react";

const DefaultActionSelect = ({
  options,
  defaultValue,
  title,
  value,
  onChange,
}) => {
  return (
    <div>
      {title.length > 0 ? <div>{title}</div> : ""}
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option disabled={true} value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DefaultActionSelect;
