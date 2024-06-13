import Track from "../Track/Track";

const Tracklist = ({ tracks }) => {
  return tracks.map((value, index) => {
    return <Track key={index} track={value} />;
  });
};

export default Tracklist;
