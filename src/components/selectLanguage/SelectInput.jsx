import React from "react";
import Select from "react-select";

const SelectInput = ({
  floatingLabels,
  options,
  defaultValue,
  setValue,
}) => {
  return (
    <div className="position-relative w-100">
      <label className="select-label">{floatingLabels}</label>
      <Select
        onChange={(value) => setValue(value)}
        options={options}
        value={defaultValue}
      />
    </div>
  );
};

export default SelectInput;
