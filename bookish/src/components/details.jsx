import React from 'react';
import { useState } from 'react';

const Details = ({ book, onBookmark, onReject }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);


  const handleBookmark = () => {
    onBookmark(book);
  };

  return (
    <div className="bookCard">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      {/* <button>{book.author}</button>
      <button>{book.genre}</button> */}
      <p>Summary: {book.summary}</p>
      {!isBookmarked && <button className="bookmarkButton" onClick={handleBookmark}> 🔖 </button>}
      {/* <button onClick={handleReject}>Reject</button> */}
      {/* <button onClick={() => console.log("Reject logic here")}>Reject</button> */}
    </div>
  );
}

export default Details;
