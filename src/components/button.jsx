
export const Button = ({ className = "", children }) => {
  return (
    <button
      className={`... ${className}`}
    >
      {children}
    </button>
  );
};

// className={`... ${className}`}