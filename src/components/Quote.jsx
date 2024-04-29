import { useEffect, useState } from "react";
import "./Quote.css";

const url = "https://api.quotable.io/random";

function Quote() {
  {
    /* HR: kreiramo tri varijable koje će pohraniti podatke o citatu i autoru te varijablu koja će pohraniti podatke preuzete s URL-a. */
  }
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  {
    /* HR: kreiramo asinkronu funkciju koja će preuzeti podatke o citatima s navedenog URL-a i spremiti podatke u data varijablu koju smo stvorili s tim ciljem; data je objekt koji treba sadržavati "content", tj. tekst citata i "author", tj. ime autora citata. */
  }
  useEffect(() => {
    getQuotesData();
  }, []);
  async function getQuotesData() {
    let response = await fetch(url);
    let data = await response.json();

    setQuote(data.content);
    setAuthor(data.author);
    console.log(data);
  }
  {
    /* Kreiramo uvjetovanu tvrdnju koja će ispisati poruku korisniku ako dođe do greške te sadržaj ne bude uspješno preuzet s URL-a; ako podaci ipak postoje (uspješno su preuzeti), tada se nastavlja kod koji vraća markup, tj. opisuje sadržaj komponente kako će ga browser učitati i prikazati korisniku. */
  }
  if (!quote || !author) {
    ("Can't get data at the moment. Please try again later.");
  }
  return (
    <>
      <div className="quote">
        <div className="quote-content">
          <p>{quote}</p>
          <h2>{author}</h2>
        </div>
      </div>
      <button onClick={getQuotesData}>Get New Quote</button>
    </>
  );
}

export default Quote;
