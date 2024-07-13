import { useState, useEffect } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../services/Spotify";
import "./App.css";

function App() {
  const [tracks, setTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Check for access token on mount
  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  const onChangeSearchTerm = (e) => setSearchTerm(e.target.value);

  const searchSpotify = async () => {
    console.log(`Searching Spotify for "${searchTerm}"`);
    const searchResults = await Spotify.search(searchTerm);

    if (searchResults && searchResults.length > 0) {
      setTracks(searchResults);
      setSearchTerm("");
    }
  };

  const onPlaylistNameChange = (value) => {
    setPlaylistName(value);
  };

  const addToPlaylist = (track) => {
    if (!playlist.includes(track)) {
      setPlaylist([...playlist, track]);
    }
  };

  const removeFromPlaylist = (trackId) => {
    setPlaylist(playlist.filter((track) => track.id !== trackId));
  };

  const savePlaylist = () => {
    const trackURIs = playlist.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs);
    setPlaylist([]);
    setPlaylistName("");
  };

  return (
    <>
      <h1 className="text-3xl font-bold m-3">Jammming</h1>
      <div className="h-screen w-screen flex flex-col items-center">
        <div className="w-11/12 h-full">
          <SearchBar
            searchTerm={searchTerm}
            onChangeSearchTerm={onChangeSearchTerm}
            search={searchSpotify}
          />
          <div className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            <SearchResults tracks={tracks} addToPlaylist={addToPlaylist} />
            <Playlist
              name={playlistName}
              tracks={playlist}
              onNameChange={onPlaylistNameChange}
              remove={removeFromPlaylist}
              onSave={savePlaylist}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
