import { Link } from "react-router-dom";

import styles from "./Catalog.module.css"

const books = [
    {
        "id": 10,
        "name": "The Shining",
        "author": "Stephen King",
        "genre": "Horror",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBstXAmkzVK-Ze6Lg_gZMVl57-7Oyvpw6QA&usqp=CAU",
        "price": 12.99,
        "description": "The Shining is a horror novel by American author Stephen King. It's a classic of the genre.",
        "pageCount": 447
    },
    {
        "id": 20,
        "name": "It",
        "author": "Stephen King",
        "genre": "Horror",
        "imageUrl": "https://example.com/it.jpg",
        "price": 14.99,
        "description": "It is a horror novel by American author Stephen King. It's a story about a shape-shifting monster.",
        "pageCount": 1153
    },
    {
        "id": 1,
        "name": "The Shining",
        "author": "Stephen King",
        "genre": "Horror",
        "imageUrl": "https://example.com/the-shining.jpg",
        "price": 12.99,
        "description": "The Shining is a horror novel by American author Stephen King. It's a classic of the genre.",
        "pageCount": 447
    },
    {
        "id": 2,
        "name": "It",
        "author": "Stephen King",
        "genre": "Horror",
        "imageUrl": "https://example.com/it.jpg",
        "price": 14.99,
        "description": "It is a horror novel by American author Stephen King. It's a story about a shape-shifting monster.",
        "pageCount": 1153
    },
    {
        "id": 3,
        "name": "Carrie",
        "author": "Stephen King",
        "genre": "Horror",
        "imageUrl": "https://example.com/carrie.jpg",
        "price": 10.99,
        "description": "Carrie is a horror novel by American author Stephen King. It's his first published novel.",
        "pageCount": 199
    },
    {
        "id": 4,
        "name": "Misery",
        "author": "Stephen King",
        "genre": "Thriller",
        "imageUrl": "https://example.com/misery.jpg",
        "price": 13.99,
        "description": "Misery is a psychological thriller novel by Stephen King. It's about an obsessed fan.",
        "pageCount": 369
    },
    {
        "id": 5,
        "name": "The Dark Tower",
        "author": "Stephen King",
        "genre": "Fantasy",
        "imageUrl": "https://example.com/the-dark-tower.jpg",
        "price": 11.99,
        "description": "The Dark Tower is a series of fantasy novels by Stephen King. It's his magnum opus.",
        "pageCount": 416
    },
    {
        "id": 6,
        "name": "Pet Sematary",
        "author": "Stephen King",
        "genre": "Horror",
        "imageUrl": "data:image/jpeg;base64,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",
        "price": 9.99,
        "description": "Pet Sematary is a horror novel by Stephen King. It's about a cursed burial ground.",
        "pageCount": 372
    }
];
  
  const Catalog = () => {
    return (
      <div className={styles.catalog}>
        {books.map((book) => (
          <div className={styles.book} key={book.id}>
            <img src={book.imageUrl} alt={book.name} />
            <h3>{book.name}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <div className={styles.buttons}>
              <button>Buy</button>
              <Link to={`/details/${book.id}`}><button> Detail</button></Link> 
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Catalog;