import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharDisplayComponent from "../components/CharDisplayComponent";
import { fetchChar } from "../store/action/starWarsAction";
import SearchBarComponent from "../components/SearchBarComponent";
import SearchHeaderComponent from "../components/SearchHeaderComponent";

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
    <SearchHeaderComponent header={"https://fontmeme.com/permalink/210720/57acfcd1768f97d716d0b7ae14ceaed3.png"}  />
    <SearchBarComponent filterByName={filterByName} />
    <div style={{ padding: 50 }}>
      <CharDisplayComponent 
        isLoading={isLoading}
        character={filteredName ? filteredFilm : character}
      />
    </div>
    </>
  );
}
