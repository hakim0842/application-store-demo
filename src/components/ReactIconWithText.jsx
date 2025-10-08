export default function ReactIconWithText({ icon, text }) {
  return (
    <span className='flex flex-row gap-1 justify-center items-center'>
      <span>{icon}</span>
      <span>{text}</span>
    </span>
  );
}
