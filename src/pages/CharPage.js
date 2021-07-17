import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharDisplayComponent from "../components/CharDisplayComponent";
import { fetchChar } from "../store/action/starWarsAction";
import SearchBarComponent from "../components/SearchBarComponent";

export default function CharPage() {
  const [filteredName, setFilteredName] = useState("")
  const [filteredFilm, setFilteredFilm] = useState("")
  const { character, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  function filterByName(e){
    setFilteredName(e.target.value)
    filterTheFilm(e.target.value)
  }

  function filterTheFilm(text){
    let filtersFilm = character.filter(value=>{
      return value.name.toLowerCase().includes(text.toLowerCase())
    })

    setFilteredFilm(filtersFilm)
  }

  useEffect(() => {
    dispatch(fetchChar());
  }, []);

  return (
    <>
    <SearchBarComponent filterByName={filterByName} />
    <div className="CharPage">
      <CharDisplayComponent 
        isLoading={isLoading}
        character={filteredName ? filteredFilm : character}
      />
    </div>
    </>
  );
}
