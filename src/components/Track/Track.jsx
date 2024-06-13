const Track = ({ index, track }) => {
  return (
    <p className="text-sky-500">
      {track.name} {track.artists[0].name}
    </p>
  );
};

export default Track;
