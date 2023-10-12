import { CheckCircle } from "./icons/check-circle";

export const HeaderStock = () => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-white text-4xl">$227.75</p>
        <div className="flex">
          <p className="text-color-green">+ 5.17(2.32%)</p>
          <p className="ml-2 text-gray-600 uppercase">Today</p>
        </div>
        <p className="text-gray-600">228.30 +0.55 (0.24%) After - Hours</p>
      </div>
      <div>
        <CheckCircle />
        <p className="text-white text-right">TSLA</p>
        <p className="text-gray-600 hidden sm:inline">Tesla Motors, Inc. | Common Stock</p>
      </div>
    </div>
  );
};
