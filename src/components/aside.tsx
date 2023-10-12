import ItemTicker from "./item-ticker";
import Paginate from "./paginate";
import Search from "./search";

export const Aside = () => {
  return (
    <div className="md:h-screen lg:h-screen">
      <div className="sm:hidden">
        <Search />
      </div>
      <div className="hidden sm:inline">
        <Search />
        <Paginate />
        <div className="flex flex-col overflow-y-auto">
          <ItemTicker />
          <ItemTicker />
          <ItemTicker imageDown={true} />
          <ItemTicker selected={true} />
          <ItemTicker imageDown={true} />
          <ItemTicker imageDown={true} />
          <ItemTicker />
          <ItemTicker />
          <ItemTicker />
          <ItemTicker />
        </div>
      </div>
    </div>
  );
};
