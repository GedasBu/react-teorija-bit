import { useContext } from "react";
import { useParams } from "react-router";
import Books from "../../Contexts/Books";

const Book = () => {
  const books = useContext(Books);
  const { id } = useParams();
  const [book] = books.masterBooks.filter((b) => parseInt(id) === b.id);

//   if () {
    
//   }

  if(books.masterBooks.length === 0){
    return (
        <div className="books__book">
          <h2>Knyga kraunama...</h2>
        </div>
      );

  } else if(typeof book === "undefined" ){
      return (
      <div className="books__book">
        <h2>Tokios knygos nera</h2>
      </div>
    );
  }

  return (
    <div className="books__book">
      <h2>{book.title}</h2>
      <img src={book.img} alt={book.title}></img>
      <div className="books__book__author">{book.author}</div>
      <div className="books__book__price">{book.price}&euro;</div>
      <div className="books__book__button">
        <button className="button">Pirkti</button>
      </div>
    </div>
  );
};

export default Book;
