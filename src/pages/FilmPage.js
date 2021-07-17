import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../store/action/starWarsAction";
import FilmDisplayComponent from "../components/FilmDisplayComponent";
import SearchBarComponent from "../components/SearchBarComponent";

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
    <SearchBarComponent filterByName={filterByName} />
    <div className="Film">
      <FilmDisplayComponent 
        isLoading={isLoading}
        film={filteredName ? filteredChar : film}
      />
    </div>
    </>
  );
}
