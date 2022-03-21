import { BookCard } from "../BookCard/BookCard";
import styled from "styled-components"
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below



  const [book, setBook] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = () => {
    axios.get("http://localhost:8080/books").then((res)=>{
      console.log(res.data)
      setBook([...res.data])
    })
  }

  const Main = styled.div`
  text-align:center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer"> 
     {
      book.map((el) => {
        return(
          <BookCard
          key={el.id}
          id={el.id}
          imageUrl={el.imageUrl}
          title = {el.title}
          price = {el.price}
        />
        )
      })
     }
       
       </Main>
    </div>
  );
};
