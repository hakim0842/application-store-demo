export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient flex items-center justify-center border-0'
    >
      {children}
    </button>
  );
}
