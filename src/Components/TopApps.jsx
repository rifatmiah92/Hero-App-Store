import { useNavigate } from "react-router";
import useApps from "../Hooks/useApps";
import TrendingApp from "./TrendingApp";

const TopApps = () => {
  const { apps } = useApps();
  const demoApps = apps.slice(0, 8);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("apps");
  };

  return (
   <div className="bg-gradient-to-b from-violet-50 to-white py-16 px-4">
  {/* Section Header */}
  <div className="text-center space-y-3">
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
      Trending Apps 
    </h2>
    <p className="text-gray-600 text-lg">
      Discover the most popular apps built by our creative developers
    </p>
  </div>

  {/* Apps Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-6xl mx-auto mt-12">
    {demoApps.map((app) => (
      <TrendingApp key={app.id} app={app} />
    ))}
  </div>

  {/* Show All Button */}
  <div className="flex justify-center items-center mt-12">
    <button
      onClick={handleNavigate}
      className="btn text-white text-lg font-semibold px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 transform hover:scale-105 transition-transform duration-300 shadow-md rounded-full"
    >
      Show All Apps
    </button>
  </div>
</div>

  );
};

export default TopApps;
