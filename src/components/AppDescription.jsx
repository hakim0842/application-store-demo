export default function AppDescription({ description }) {
  return (
    <div>
      <h1 className='text-lg md:text-2xl font-semibold'>Description</h1>
      <p className='mt-6 text-sm md:text-lg'>{description}</p>
    </div>
  );
}
