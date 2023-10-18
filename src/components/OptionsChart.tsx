import { getPastDate } from "@/helpers";
import { useHistoricalStore } from "@/store/store-historical";

export const OptionsChart = () => {
  const { selected, setDates, setSelected } = useHistoricalStore();
    const options = [
      {name: '1 Week', responsiveName: '1W'},
      {name: '1 Month', responsiveName: '1M'},
      {name: '6 Months', responsiveName: '6M'}
    ];
  
    const changeDates = (option: string) => {
      if (option === '1W') {
        const {dateFrom , dateTo} = getPastDate(7);
        setDates(dateFrom, dateTo);
        setSelected(option);
      }

      if (option === '1M') {
        const {dateFrom , dateTo} = getPastDate(30);
        setDates(dateFrom, dateTo);
        setSelected(option);
      }

      if (option === '6M') {
        const {dateFrom , dateTo} = getPastDate(180);
        setDates(dateFrom, dateTo);
        setSelected(option);
      }

      return;
    }

  return (
    <div className="flex flex-wrap border-b-2 border-slate-800 pb-1 text-color-green">
      {
        options.map((option) => (
          <div key={option.name} className="uppercase pr-5" onClick={() => changeDates(option.responsiveName)}>
            <div className={`border-green-500 pb-1 cursor-pointer hover:border-b-2 hover:text-white ${(selected === option.responsiveName) ? 'border-b-2 text-white': ''}`}>
              <span className="hidden sm:inline">{option.name}</span>
              <span className="sm:hidden">{option.responsiveName}</span>
            </div>
          </div>    
        ))
      }
    </div>
  );
};
