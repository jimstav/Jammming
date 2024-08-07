const Track = ({ track, addToPlaylist, removeFromPlaylist }) => {
  const trackNameLimit = 70;

  const onAdd = () => {
    addToPlaylist(track);
  };

  const onRemove = () => {
    removeFromPlaylist(track.id);
  };

  return (
    <li key={track.id} className="flex justify-between items-center mb-2">
      <p className="text-sky-500">
        {track.name.length <= trackNameLimit
          ? track.name
          : track.name.substring(0, trackNameLimit) + "..."}{" "}
        by {track.artist ?? "unknown"}
      </p>
      {addToPlaylist && (
        <button
          onClick={onAdd}
          className="ml-4 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          +
        </button>
      )}
      {removeFromPlaylist && (
        <button
          onClick={onRemove}
          className="ml-4 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          -
        </button>
      )}
    </li>
  );
};

export default Track;
