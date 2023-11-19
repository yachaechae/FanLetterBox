import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [selectedId,setSelectedId] = useState("")
  const [letterList, setLetterList] = useState([])
  
  useEffect(() => {
    const saveLocalStorage = JSON.parse(localStorage.getItem("letterList"));
    if(saveLocalStorage){
      setLetterList( saveLocalStorage)
    }
  }, [])
  


  return (
    <>
        <Header selectedId = {selectedId} setSelectedId={setSelectedId}/>
        <LetterForm letterList = {letterList} setLetterList={setLetterList}/>
        <LetterList selectedId = {selectedId} letterList={letterList} setLetterList={setLetterList}/>
    </>
  );
}
