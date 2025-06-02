type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-amber-500 h-10 flex items-center justify-center w-40 rounded-xl hover:bg-amber-400"
    >
      {children}
    </button>
  );
};

export { Button };
