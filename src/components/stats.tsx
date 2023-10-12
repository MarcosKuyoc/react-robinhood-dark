import { ListStats } from "./list-stats";

export const Stats = () => {
  return (
    <div>
      <div className="flex flex-wrap border-b-2 border-slate-800 pb-1">
        <div className="text-white uppercase pr-5">
          <span className="border-b-2 border-green-500 pb-1">
            <span className="hidden sm:inline">1 Day</span>
            <span className="sm:hidden">1D</span>
          </span>
        </div>
        <div className="text-color-green uppercase pr-5">
          <span className="hidden sm:inline">1 Week</span>
          <span className="sm:hidden">1W</span>
        </div>
        <div className="text-color-green uppercase pr-5">
          <span className="hidden sm:inline">1 Month</span>
          <span className="sm:hidden">1M</span>
        </div>
        <div className="text-color-green uppercase pr-5">
          <span className="hidden sm:inline">6 Months</span>
          <span className="sm:hidden">6M</span>
        </div>
        <div className="text-color-green uppercase pr-5">
          <span className="hidden sm:inline">1 Year</span>
          <span className="sm:hidden">1Y</span>
        </div>
        <div className="text-color-green uppercase pr-5">
          <span className="hidden sm:inline">5 Years</span>
          <span className="sm:hidden">5Y</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-9">
        <div className="w-full md:w-1/2 pr-5">
          <p className="text-white pb-5">Stats</p>
          <ListStats />
        </div>
        <div className="w-full md:w-1/2 md:pl-5">
          <p className="text-white pb-5 pt-5 md:pt-0 lg:pt-0">About</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eligendi quasi nemo, fugit nostrum hic ad necessitatibus blanditiis
            tenetur culpa cupiditate nulla deleniti ea dolores dolorum nisi id
            reprehenderit vel?
          </p>
        </div>
      </div>
    </div>
  );
};
