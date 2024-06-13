import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Jammming</h1>
      <div className="h-screen flex flex-col">
        <SearchBar />
        <div className="flex-1 p-4 grid grid-cols-2 gap-4">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </>
  );
}

export default App;
