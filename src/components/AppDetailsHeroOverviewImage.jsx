export default function AppDetailsHeroOverviewImage({ icon, text, count }) {
  return (
    <div className='flex flex-col gap-1 p-4'>
      {icon}
      <p className='text-sm'>{text}</p>
      <p className='text-2xl md:text-4xl font-extrabold'>{count}</p>
    </div>
  );
}
