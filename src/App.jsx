import { useEffect, useState } from "react"

import NoteList from "./components/NoteList"
import { nanoid } from 'nanoid'
import Header from "./components/Header"

const App = () => {
  
    const [notes, setNotes] = useState([ ])

  useEffect(() => {
    const storedData = localStorage.getItem("notepad-data");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setNotes(parsedData.notes || []);
    }
  }, []); 
  

  const handleAddNote = (text) => {
    const date = new Date()
    const newNote = {id : nanoid(), text : text, date : date.toLocaleDateString() }

    const newarr = [...notes, newNote]

    setNotes(newarr)

  }

  const handleDeleteNote = (id) => {

    // i used filter function to iterate through my array and creating a new array after meeting a condition
    const newNotes = notes.filter((note)=> note.id !== id)
    
    setNotes(newNotes)
    updateLocalStorage(newNotes)

  }

  const updateLocalStorage = (data) => {
    localStorage.setItem("notepad-data", JSON.stringify({ notes: data }));
  };


  return (
    <div className="app container">
      <div>
        <Header/>
      </div>
      <NoteList notesprop= {notes} handleAddNote={handleAddNote} 
      handleDeleteNote= {handleDeleteNote} notes={notes} />
    </div>
  )
}

export default App




