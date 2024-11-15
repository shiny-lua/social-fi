const Loader = ({color, size}: {color?:string, size?: string}) => {
  return (
    <div className={`${size ? size : 'h-5 w-5 '} animate-spin rounded-full border-2 border-solid ${color ? color : 'border-white' } border-t-transparent`}></div>
  );
};

export default Loader;
