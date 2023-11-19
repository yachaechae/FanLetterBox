import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    selectedId: "",
    setSelectedId: () => {},
    letterList: [],
    letter:{},
    addNewLetter: (name,value,letterOwner) => {},
    addLetterList: (addData)=>{},

}
const defaultInput = {
    nickName : "",
    content : "",
    letterId: "",
    createdAt : "",
    writeTo : ""
}

export const RootContext = createContext(initialState)

export function RootProvider({ children }) {
    const [selectedId,setSelectedId] = useState("")
    const [letterList, setLetterList] = useState([])
    const [letter,setLetter] = useState(defaultInput)
    
    const addNewLetter = (name,value,letterOwner) => {

        setLetter({...letter,
            [name]:value,
            letterId: uuidv4(),
            createdAt: new Date().toLocaleString(),
            writeTo : letterOwner
        })
    }

    const addLetterList = (addData) => {
        localStorage.setItem("letterList", JSON.stringify(addData))
        setLetterList(addData)
        setLetter(defaultInput)
    }
    console.log(letterList)

  useEffect(() => {
    const saveLocalStorage = JSON.parse(localStorage.getItem("letterList"));
    console.log(saveLocalStorage)
    if(saveLocalStorage){
      setLetterList( saveLocalStorage)
    }
  }, [])

  console.log(letterList)
  const value = {
    selectedId,
    setSelectedId,
    letterList,
    letter,
    addNewLetter,
    addLetterList
  }
    return <RootContext.Provider value={value}>{children}</RootContext.Provider>
}

export const useRootContext = () => useContext(RootContext)