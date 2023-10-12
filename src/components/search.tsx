import SearchIcon from "../assets/icons/search.svg";

const Search = () => {
  return (
    <div className="flex border-b border-slate-800 justify-center pt-5 pb-5">
      <img src={SearchIcon} alt="SearchIcon" />
      <div className="ml-2">
        <p className="text-gray-600">Search by stock name</p>
      </div>
    </div>
  )
}

export default Search