const SearchBar = () => {
  return (
    <div className="w-10/12 p-4 bg-gray-100 border-b border-gray-300">
      <input
        type="text"
        placeholder="Search for a song"
        className="w-full p-2 border border-gray-400 rounded mb-4"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Search</button>
    </div>
  );
};

export default SearchBar;
