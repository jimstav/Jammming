import Tracklist from "../Tracklist/Tracklist";

const SearchResults = ({ tracks }) => {
  console.log(tracks);
  return (
    <div className="bg-white p-4 border border-gray-300 rounded shadow h-full">
      {/* Search results will go here */}
      <h2 className="text-2xl font-bold text-sky-400 mb-4">Results</h2>
      <Tracklist tracks={tracks} />
    </div>
  );
};

export default SearchResults;
