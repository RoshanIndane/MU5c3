import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {

  const name = useParams()
  console.log(name)
  
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const [data, setData] = useState([])

  useEffect(()=>{
    getdata()
  },[])

  const getdata = () => {

    axios.get(`http://localhost:8080/${name.Section}`).then((res)=>{
      setData([...res.data])
      // console.log("line 27",data)
    })
  }

  console.log("line 33",data)

  const Main = styled.div`
  text-align:center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
         name.Section
        }
      </h2>
      {/* <SortAndFilterButtons handleSort={"give sorting function to component"} /> */}

       <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
        {
      data.map((el) => {
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
    </>
  );
};
