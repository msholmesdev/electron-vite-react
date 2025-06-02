type InputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-64">
      {label && (
        <label className="text-sm font-medium text-gray-200">{label}</label>
      )}
      <input
        className="focus:text-gray-800 focus:bg-orange-100 hover:border-amber-300 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
        {...rest}
      />
    </div>
  );
};

export { Input };
