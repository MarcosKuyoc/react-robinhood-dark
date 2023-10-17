import { usePaginationStore } from "@/store";
import ItemTicker from "./ItemTicker";
import Paginate from "./paginate";
import Search from "./search";
import { useFetchDataTickers } from "@/hooks/useFetchTickers";

export const AsideMenu: React.FC = () => {
  const { page } = usePaginationStore();
  const { isLoading, isError, tickers,  suggested} = useFetchDataTickers(page);

  return (
    <nav className="md:h-screen lg:h-screen">
      <div className="sm:hidden">
        <Search />
      </div>
      <div className="hidden sm:inline">
        <Search />
        <Paginate />
        <div className="flex flex-col overflow-y-auto">
          {
            tickers.map((item) => {
              return <ItemTicker key={item.symbol} data={item} selected={suggested.symbol === item.symbol} />    
            }
            )
          }
          {isLoading && <strong>Cargando...</strong>}
          {isError && <p>Ha habido un error</p>}
        </div>
      </div>
    </nav>
  );
};
