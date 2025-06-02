type CheckboxProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ label, ...rest }: CheckboxProps) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="h-4 w-4 accent-amber-500" {...rest} />
      {label && <span className="text-sm text-gray-200">{label}</span>}
    </label>
  );
};

export { Checkbox };
