import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Details from './components/details.jsx'
import AuthorBan from './components/author.jsx'
import GenreBan from './components/genre.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);
  // const [rejected, setRejected] = useState([]);
  const [bannedGenres, setBannedGenres] = useState([]);
  const [bannedAuthors, setBannedAuthors] = useState([]);


  const banGenre = (genre) => {
    if (!bannedGenres.includes(genre)) {
      setBannedGenres([...bannedGenres, genre]);
    }
  };
  
  const banAuthor = (author) => {
    if (!bannedAuthors.includes(author)) {
      setBannedAuthors([...bannedAuthors, author]);
    }
  };


  const handleBookmark = (book) => {
    setBookmarks([...bookmarks, book]);
  };

  // const handleReject = (book) => {
  //   setRejected([...rejected, book]);
  //   showAnother(); 
  // };

  const isBookBookmarked = (book) => {
    return bookmarks.some((b) => b.title === book.title);
  };

  const books = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fiction",
      summary: "A woman finds herself between life and death, navigating infinite lives she could’ve lived.",
      image: "https://m.media-amazon.com/images/I/71ls-I6A5KL.jpg"
    },

    {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Non-fiction",
      summary: "A guide to building good habits and breaking bad ones with small changes.",
      image: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg"
    },
    
    {
      title: "Where the Crawdads Sing", 
      author: "Delia Owens",
      genre: "Mystery",
      summary: "A coming-of-age story set in the marshes of North Carolina, blending mystery and romance.",
      image: "https://m.media-amazon.com/images/I/813HjdVYCrL.jpg"
    },

    {
      title: "Educated",  
      author: "Tara Westover",
      genre: "Memoir",
      summary: "A memoir about a woman's quest for knowledge, growing up in a strict and abusive household in rural Idaho.",
      image: "https://m.media-amazon.com/images/I/71-4MkLN5jL.jpg"
    },

    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Thriller",
      summary: "A psychological thriller about a woman's act of violence against her husband and the therapist obsessed with uncovering her motive.",
      image: "https://m.media-amazon.com/images/I/61R+Cpm+HxL._UF1000,1000_QL80_.jpg"
    },

    {
      title: "Becoming",  
      author: "Michelle Obama",
      genre: "Memoir",
      summary: "The memoir of the former First Lady of the United States, detailing her life from childhood through her years in the White House.",
      image: "https://m.media-amazon.com/images/I/81cJTmFpG-L.jpg"
    },

    {
      title: "The Vanishing Half",
      author: "Brit Bennett",
      genre: "Fiction",
      summary: "A multi-generational narrative about two twin sisters whose lives diverge when one decides to pass as white.",
      image: "https://m.media-amazon.com/images/I/71qWC2D6R7L.jpg"
    },

    {
      title: "Circe",
      author: "Madeline Miller",
      genre: "Fantasy",
      summary: "A reimagining of the life of Circe, a figure from Greek mythology, exploring themes of femininity and power.",
      image: "https://m.media-amazon.com/images/I/B1eAVSHxJ4L._UF1000,1000_QL80_.jpg"
    },

    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      genre: "Historical Fiction",
      summary: "A fictional biography of a reclusive Hollywood icon, revealing her glamorous and scandalous life through her seven marriages.",
      image: "https://m.media-amazon.com/images/I/81PkmvwdbhL._UF1000,1000_QL80_.jpg"
    },

    {
      title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      genre: "Historical Fiction",
      summary: "The making of that legend is chronicled in this riveting and unforgettable novel, written as an oral history of one of the biggest bands of the seventies.",
      image: "https://m.media-amazon.com/images/M/MV5BOTMwNzIzZDItYzYzYS00ZDA4LThiNmYtYTJjYjMwZTUxNTk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },

    {
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      genre: "Fantasy",
      summary: "A young woman makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets.",
      image: "https://m.media-amazon.com/images/I/91Ql48Y0mqL._UF1000,1000_QL80_.jpg"
    },

    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      genre: "Fiction",
      summary: "A lone astronaut must save Earth from an extinction-level threat in this gripping tale of survival and ingenuity.",
      image: "https://m.media-amazon.com/images/I/81dGKZOtqIL._UF1000,1000_QL80_.jpg"
    },

    {
      title: "The Song of Achilles",
      author: "Madeline Miller",
      genre: "Fantasy",
      summary: "A retelling of the Iliad from the perspective of Patroclus, exploring his relationship with Achilles.",
      image: "https://m.media-amazon.com/images/I/61DfFK65gwL._SL500_.jpg"
    },

    {
      title: "Normal People",
      author: "Sally Rooney",
      genre: "Fiction",
      summary: "A story of two Irish teenagers who navigate love and friendship over several years.",
      image: "https://m.media-amazon.com/images/I/71fnqwR0eSL._UF1000,1000_QL80_.jpg"
    },

    {
      title: "The Night Circus",
      author: "Erin Morgenstern",
      genre: "Fantasy",
      summary: "A magical competition between two young illusionists unfolds within the mysterious confines of a wandering circus.",
      image: "https://m.media-amazon.com/images/I/71+whvJjE3L.jpg"
    },

    {
      title: "Anxious People",
      author: "Fredrik Backman",
      genre: "Fiction",
      summary: "A poignant exploration of the human condition, centered around a failed bank robbery and the hostages taken.",
      image: "https://i0.wp.com/crossexaminingcrime.wordpress.com/wp-content/uploads/2023/06/anxious-people.jpg?fit=780%2C1200&ssl=1"
    },

    {
      title: "The Guest List",
      author: "Lucy Foley",
      genre: "Mystery",
      summary: "A wedding celebration turns deadly when a murder occurs on a remote Irish island.",
      image: "https://m.media-amazon.com/images/I/71F6Siw4a8L.jpg"
    },

    {
      title: "The Love Hypothesis",
      author: "Ali Hazelwood",
      genre: "Romance",
      summary: "A fake relationship between two scientists leads to unexpected feelings in this charming romantic comedy.",
      image: "https://m.media-amazon.com/images/I/71QDhHvv7wL.jpg"
    },

    {
      title: "Take a Hint, Dani Brown",
      author: "Talia Hibbert",
      genre: "Romance",
      summary: "A fake relationship between a pragmatic woman and a charming professor leads to unexpected feelings.",
      image: "https://m.media-amazon.com/images/I/71tcXFFuEjL.jpg"
    },

    {
      title: "Get a Life, Chloe Brown",
      author: "Talia Hibbert",
      genre: "Romance",
      summary: "A chronically ill computer geek who tries to gain life experience enlists the help of a free-spirited artist.",
      image: "https://m.media-amazon.com/images/I/71St3wEtpWL.jpg"
    },

    {
      title: "Act Your Age, Eve Brown",
      author: "Talia Hibbert",
      genre: "Romance",
      summary: "A chaotic woman finds love with a buttoned-up man in this delightful romantic comedy.",
      image: "https://m.media-amazon.com/images/I/71h3tXFXSUS._UF1000,1000_QL80_.jpg"
    },

    {
      title: "Beach Read",
      author: "Emily Henry",
      genre: "Romance",
      summary: "Two writers with opposing styles are forced to collaborate on a project, leading to unexpected chemistry.",
      image: "https://images.squarespace-cdn.com/content/v1/5ee7af80b0e5ab58bc5ee38e/1592245508445-B0YQ4VZDIC91M9S1EPZQ/9781984806734.jpg"
    },

    {
      title: "People We Meet on Vacation",
      author: "Emily Henry",
      genre: "Romance",
      summary: "Two friends with a complicated history take a vacation together, leading to unexpected revelations.",
      image: "https://m.media-amazon.com/images/I/71HADF3dRUL._UF1000,1000_QL80_.jpg"
    },

    {
      title: "Because Fat Girl",
      author: "Lauren Marie Fleming",
      genre: "Romance",
      summary: "A heartwarming story about self-acceptance and finding love, focusing on a plus-sized woman.",
      image: "https://m.media-amazon.com/images/I/61fKERhXTvL._UF1000,1000_QL80_.jpg"
    }
  ];

  const showAnother = () => {
    let nextIndex = (currentIndex + 1) % books.length;
    let attempts = 0;

      do {
        nextIndex = (nextIndex + 1) % books.length;
        attempts++;
      } while (
        (bannedGenres.includes(books[nextIndex].genre) ||
        bannedAuthors.includes(books[nextIndex].author)) &&
        attempts < books.length
      );

      setCurrentIndex(nextIndex);
  };

  return (
    <>
      <div className = "fullscreen">
        <h1 className="title"> Bookish 📚</h1>
        <p>In a reading funk? Let's help you find the perfect book to get you out of your slump!</p>
        <p> Did we almost guess the perfect book for you? Bookmark it here 🔖 </p>
        <p> Or did we get it wrong? Reject it by clicking the component you don't like and we'll never suggest it again. </p>
        

        <div className="rejects">
          <h2>Rejected Components</h2>
          <i> Yup we got it, we're not suggesting these again. 🗄️  </i>
          <div className="bannedGenres">
            <h3>Banned Genres</h3>
            <ul>
              {bannedGenres.map((genre, index) => (
                <li className="banned-item" key={index}>{genre}
                  <button className="unban-button" onClick={() => {
                      const updated = bannedGenres.filter(g => g !== genre);
                      setBannedGenres(updated);
                    }}> x
                  </button>
                </li>
              ))}
            </ul>

            <h3>Banned Authors</h3>
            <ul>
              {bannedAuthors.map((author, index) => (
                <li className="banned-item" key={index}>{author}
                  <button className="unban-button" onClick={() => {
                      const updated = bannedAuthors.filter(a => a !== author);
                      setBannedAuthors(updated);
                    }}> x
                  </button>
                </li>
              ))}
            </ul>

          </div>
        </div>

        <div className="recs">
          <h2>Current Recommendation </h2> 
          <Details className="bookCard"
            img src={books[currentIndex].image}
            alt={books[currentIndex].title}
            book={books[currentIndex]}
            onBookmark={handleBookmark}
            isBookmarked={isBookBookmarked(books[currentIndex])}
          />

          <div className="ban-buttons">
            <GenreBan genre={books[currentIndex].genre} onBan={banGenre} />
            <AuthorBan author={books[currentIndex].author} onBan={banAuthor} />
          </div>

          <button className="button" onClick={showAnother}> Show Another </button>
        </div>

        <div className="bookmarks">
          <h2>Bookmarked Books</h2>
          <i> These are the books you liked and want to read later. 🗃️ </i>

          <ul>
            {bookmarks.map((book, index) => (
              <li key={index}>
                <img src={book.image} alt={book.title} width="100px" height="150px" />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  )
}

export default App
