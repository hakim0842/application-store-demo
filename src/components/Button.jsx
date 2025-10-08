export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className='mt-4 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient'
    >
      {children}
    </button>
  );
}
