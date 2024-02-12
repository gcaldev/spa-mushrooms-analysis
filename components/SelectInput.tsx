import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

type SelectInputProps = {
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  name?: string;
  label?: string;
  options?: Array<{ text: string; value: string; defaultValue?: boolean }>;
};

const SelectInput = ({
  label,
  onChange,
  name,
  options = [],
}: SelectInputProps) => {
  const defaultOption = options.find((item) => item.defaultValue);
  const [selectedOption, setSelectedOption] = useState(
    defaultOption?.value || ""
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onChange && onChange(event);
  };

  return (
    <div>
      {label && (
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 text-start"
        >
          {label}
        </label>
      )}
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={selectedOption}
        onChange={handleChange}
        {...(name ? { name } : {})}
      >
        {options.map(({ value, text }, index) => (
          <option value={value} key={index}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
