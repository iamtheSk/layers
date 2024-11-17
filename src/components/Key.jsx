const Key = ({ children, ...props }) => {
  const { className, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className={`size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium ${className}`}>
      {children}
    </div>
  );
};

export default Key;
