import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  const {id} = useParams()
  const name = useParams()
  console.log(name)

  const [book, setBook] = useState({})

  const [found, setFound] = useState(true)

  useEffect(()=>{
    getData()
  },[])

  const getData = () => {
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
      setBook(res.data)
    })
  }

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{book.title}</h2>
        <img className="image" src={book.imageUrl} alt="#" />
        <div className="author">{book.author}</div>
        <div className="description">{book.description}</div>
        <div className="price">{book.price}</div>
        <div className="section">{book.section}</div>
        <div className="isbnNumber">{book.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
        </ul>
      </div>
    </>
  );
};
