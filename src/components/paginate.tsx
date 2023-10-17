import { ChevronLeft, ChevronRight } from "@/icons";
import { usePaginationStore } from "@/store";

const Paginate = () => {
  const { page, setPage } = usePaginationStore();
  
  const handlePrev = async () => {
    const prev = Math.max(page - 1, 0);
    setPage(prev);
  };
  
  const handleNext = async () => {
    const next =  page + 1;
    setPage(next);
  };
  
  return (
    <div className="flex justify-end pt-2 mr-2">
      <ul className="flex">
        <li className="pr-2">
          <a href="#" onClick={handlePrev}>
            <ChevronLeft />
          </a>
        </li>
        <li className="pr-2">
          <a href="#" onClick={handleNext}>
            <ChevronRight />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Paginate