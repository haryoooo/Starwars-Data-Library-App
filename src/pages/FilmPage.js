import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../store/action/starWarsAction";
import FilmDisplayComponent from "../components/FilmDisplayComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import SearchHeaderComponent from "../components/SearchHeaderComponent";

export default function FilmPages() {
  const [filteredName, setFilteredName] = useState("")
  const [filteredChar, setFilteredChar] = useState("")
  const { film, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  function filterByName(e){
    setFilteredName(e.target.value)
    filterTheChar(e.target.value)
  }

  function filterTheChar(text){
    let filtersChar = film.filter(value=>{
      return value.title.toLowerCase().includes(text.toLowerCase())
    })

    setFilteredChar(filtersChar)
  }

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <>
    <SearchHeaderComponent header={"https://fontmeme.com/permalink/210720/866782710852762308312537bc6ba4ac.png"} />
    <SearchBarComponent filterByName={filterByName} />
    <div style={{ padding: 30 }}>
      <FilmDisplayComponent 
        isLoading={isLoading}
        film={filteredName ? filteredChar : film}
      />
    </div>
    </>
  );
}
