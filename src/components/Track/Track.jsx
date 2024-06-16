const Track = ({ index, track, addToPlaylist }) => {
  const onAdd = () => {
    addToPlaylist(track);
  };

  return (
    <li className="flex justify-between items-center mb-2">
      <p className="text-sky-500">
        {track.name} {track.artists[0].name}
      </p>
      <button
        onClick={onAdd}
        className="ml-4 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        +
      </button>
    </li>
  );
};

export default Track;
