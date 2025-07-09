const GenreBan = ({ genre, onBan }) => {
  return (
    <button className="button" onClick={() => onBan(genre)}>
      {genre}
    </button>
  );
};

export default GenreBan;