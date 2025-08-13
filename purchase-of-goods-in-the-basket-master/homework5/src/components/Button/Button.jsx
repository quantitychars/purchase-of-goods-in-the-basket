const Button = ({
  type = "button",
  className = "",
  onClick,
  children,
  ...rest
}) => {
  return (
    <button className={className} onClick={onClick} type="button" {...rest}>
      {children}
    </button>
  );
};
export { Button };
