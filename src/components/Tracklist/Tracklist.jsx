import Track from "../Track/Track";

const Tracklist = ({ tracks }) => {
  return tracks.map((value) => {
    return <Track key={value.id} track={value} />;
  });
};

export default Tracklist;
