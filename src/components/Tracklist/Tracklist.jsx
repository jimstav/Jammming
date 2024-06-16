import Track from "../Track/Track";

const Tracklist = ({ tracks, addToPlaylist }) => {
  return (
    <ul>
      {tracks.map((value) => {
        return <Track key={value.id} track={value} addToPlaylist={addToPlaylist} />;
      })}
    </ul>
  );
};

export default Tracklist;
