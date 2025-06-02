import { useState } from "react";

type SliderProps = {
  label?: string;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Slider = ({
  label,
  min = 0,
  max = 100,
  value,
  onChange,
  ...rest
}: SliderProps) => {
  const [internalValue, setInternalValue] = useState<number>(value ?? min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(Number(e.target.value));
    onChange?.(e);
  };

  return (
    <div className="flex flex-col gap-2 w-64">
      {label && (
        <div className="flex justify-between">
          <label className="text-sm font-medium text-gray-200">{label}</label>
          <span className="text-sm font-medium text-gray-200">
            {value ?? internalValue}
          </span>
        </div>
      )}
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-200 w-6 text-right">{min}</span>
        <input
          type="range"
          min={min}
          max={max}
          value={value ?? internalValue}
          onChange={handleChange}
          className="w-full accent-amber-500 appearance-none bg-orange-200 h-2 rounded-full"
          {...rest}
        />
        <span className="text-xs text-gray-200 w-6">{max}</span>
      </div>
    </div>
  );
};

export { Slider };
