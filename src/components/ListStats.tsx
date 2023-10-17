import { ItemListStats } from "@/components/ItemListStats";
import { useFetchDataTickers } from "@/hooks/useFetchTickers";
import { usePaginationStore } from "@/store/store-pagination";

export const ListStats = () => {
  const { page } = usePaginationStore();
  const { suggested } = useFetchDataTickers(page);
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col mr-10">
        <ItemListStats name="Open" price={suggested.eod?.open} />
        <ItemListStats name="Close" price={suggested.eod?.close} />
        <ItemListStats name="High" price={suggested.eod?.high} />
        <ItemListStats name="Low" price={suggested.eod?.low} />
        <ItemListStats name="Volume" price={suggested.eod?.volume} />
      </div>
      <div className="w-1/2 flex flex-col">
        <ItemListStats name="AVG Open" price={suggested.eod?.adj_close} />
        <ItemListStats name="AVG Close" price={suggested.eod?.adj_open} />
        <ItemListStats name="AVG High" price={suggested.eod?.adj_high} />
        <ItemListStats name="AVG Low" price={suggested.eod?.adj_low} />
        <ItemListStats name="AVG Volume" price={suggested.eod?.adj_volume} />
      </div>
    </div>
  );
};
