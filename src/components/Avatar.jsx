const Avatar = ({ children, ...props }) => {
  const { className, ...otherProps } = props;

  return (
    <div
      className={` size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900 ${className}`}>
      {children}
    </div>
  );
};

export default Avatar;
