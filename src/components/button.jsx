export const Button = ({ className, children }) => {
  return (
    <button className={`border-0 rounded-md  text-xs  ${className}`}>
      {children}
    </button>
  );
};
