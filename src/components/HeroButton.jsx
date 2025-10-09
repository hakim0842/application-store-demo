export default function HeroButton({ image, children, link }) {
  return (
    <button className='btn bg-white shadow-sm text-black btn-sm md:btn-md lg:btn-lg border-0 hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 hover:text-white transition-all duration-150 hover:-translate-y-0.5 active:translate-0 hover:shadow-lg active:shadow-sm'>
      <a
        className='flex flex-row w-full gap-2 justify-center items-center h-full my-auto'
        href={link}
        target='_blank'
      >
        <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
          <img className='w-8 h-8 p-1' src={image} alt={children} />
        </span>
        <span>{children}</span>
      </a>
    </button>
  );
}
