export default function OverviewItem({ title, count, description }) {
  return (
    <div className='flex flex-col gap-2 p-3 md:p-5 lg:p-7 glassy flex-1 w-full'>
      <p className='text-sm md:text-lg'>{title}</p>
      <p className='text-3xl lg:text-6xl font-extrabold'>{count}</p>
      <p className='text-sm lg:text-lg'>{description}</p>
    </div>
  );
}
