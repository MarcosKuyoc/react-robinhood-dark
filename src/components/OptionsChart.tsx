export const OptionsChart = () => {
  return (
    <div className="flex flex-wrap border-b-2 border-slate-800 pb-1">
      {/* <div className="text-white uppercase pr-5">
        <span className="border-b-2 border-green-500 pb-1">
          <span className="hidden sm:inline">1 Day</span>
          <span className="sm:hidden">1D</span>
        </span>
      </div> */}
      <div className="text-color-green uppercase pr-5">
        <span className="hidden sm:inline">1 Week</span>
        <span className="sm:hidden">1W</span>
      </div>
      <div className="text-white uppercase pr-5">
        <span className="border-b-2 border-green-500 pb-1">
          <span className="hidden sm:inline">1 Month</span>
          <span className="sm:hidden">1M</span>
        </span>
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
  );
};
