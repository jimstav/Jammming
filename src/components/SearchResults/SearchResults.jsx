import Tracklist from "../Tracklist/Tracklist";

const SearchResults = ({ tracks }) => {
  const items = tracks["items"];
  console.log(items);
  return (
    <div className="results bg-white p-4 border border-gray-300 rounded shadow">
      {/* Search results will go here */}
      <h2 className="text-3xl font-bold text-sky-400">Results</h2>
      <Tracklist tracks={items} />
    </div>
  );
};

export default SearchResults;
