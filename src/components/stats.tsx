import { ListStats } from "@/components/ListStats";

export const Stats: React.FC = () => {
  return (
    <div className="pt-5">
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
          <div className="flex pt-4 justify-end">
            <button className="bg-color-green rounded-lg p-2">Favoritos</button>
          </div>
        </div>
      </div>
    </div>
  );
};
