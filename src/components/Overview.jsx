import OverviewItem from "./OverviewItem";

export default function Overview() {
  return (
    <div className='p-5 md:p-7 lg:p-15 xl:p-20 bg-gradient text-center text-white'>
      <h1 className='text-2xl md:text-3xl lg:text-5xl'>
        Trusted by Millions, Built for You
      </h1>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mt-5 md:mt-10'>
        <OverviewItem
          title='Total Downloads'
          count='29.6M'
          description='21% more than last month'
        />
        <OverviewItem
          title='Total Reviews'
          count='906K'
          description='46% more than last month'
        />
        <OverviewItem
          title='Active Apps'
          count='132+'
          description='31 more will Launch'
        />
      </div>
    </div>
  );
}
