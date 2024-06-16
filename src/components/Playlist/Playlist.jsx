import Track from "../Track/Track";

const Playlist = ({ name, tracks, onNameChange, remove }) => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded shadow h-full">
      <input
        type="text"
        placeholder="Playlist Name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        className="w-full p-2 border border-gray-400 rounded mb-4"
      ></input>
      <ul className="mb-4">
        {tracks.map((value) => {
          return <Track key={value.id} track={value} removeFromPlaylist={remove} />;
        })}
      </ul>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Save to Spotify
      </button>
    </div>
  );
};

export default Playlist;
