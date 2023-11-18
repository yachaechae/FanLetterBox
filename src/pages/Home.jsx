import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [selectedId,setSelectedId] = useState("")
  const [letterList, setLetterList] = useState([])
  const [modalOpen,setModalOpen] = useState(false)
  useEffect(() => {
    setLetterList( JSON.parse(localStorage.getItem("letterList")))
  }, [])
  
  return (
    <>
        <Header selectedId = {selectedId} setSelectedId={setSelectedId}/>
        <LetterForm letterList = {letterList} setLetterList={setLetterList} modalOpen = {modalOpen} setModalOpen={setModalOpen}/>
        <LetterList selectedId = {selectedId} letterList={letterList}/>
    </>
  );
}
