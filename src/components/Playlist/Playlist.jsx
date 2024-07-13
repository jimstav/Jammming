import Track from "../Track/Track";

const Playlist = ({ name, tracks, onNameChange, remove, onSave }) => {
  const handleSave = (e) => {
    e.preventDefault();

    if (!name) {
      alert("You have to provide a name.");
    } else if (!tracks || tracks.length === 0) {
      alert("You have to provide some tracks.");
    } else {
      onSave(tracks);
    }
  };
  return (
    <div className="bg-white p-4 border border-gray-300 rounded shadow h-full">
      <form onSubmit={handleSave}>
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
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save to Spotify
        </button>
      </form>
    </div>
  );
};

export default Playlist;
