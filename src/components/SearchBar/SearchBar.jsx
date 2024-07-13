import { useState } from "react";

const SearchBar = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      search(searchTerm);
      setSearchTerm("");
    } else {
      alert("No search term provided");
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="p-4 bg-gray-100 rounded border-b border-gray-300">
        <input
          type="text"
          placeholder="Search for a song"
          className="w-full p-2 border border-gray-400 rounded mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
