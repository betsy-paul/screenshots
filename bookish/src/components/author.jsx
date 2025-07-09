const AuthorBan = ({ author, onBan }) => {
  return (
    <button className="button" onClick={() => onBan(author)}>
     {author}
    </button>
  );
};

export default AuthorBan;