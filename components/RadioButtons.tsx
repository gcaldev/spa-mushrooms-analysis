import React, { ChangeEventHandler } from "react";

type RadioButtonsProps = {
  options: Array<{ text: string; value: string }>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  label?: string;
};

const RadioButtons = ({
  options,
  onChange,
  value: selectedOption,
  label,
}: RadioButtonsProps) => {
  return (
    <div className="col-span-2 flex flex-col justify-start items-start text-gray-900">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 text-start">
          {label}
        </label>
      )}
      <div>
        {options.map(({ value, text }, index) => (
          <label className="mr-2 text-sm" key={`${value}${index}`}>
            <input
              type="radio"
              value={value}
              className="mr-1"
              checked={selectedOption === value}
              onChange={onChange}
            />
            {text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
