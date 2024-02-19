import { useState } from "react"
import { nanoid } from 'nanoid'


const AddNote = ( {handleAddNote, notes} ) => {
    const [storeText, setStoreText] = useState('')

    const handleChange = (event) => {
        // console.log(event.target.value)
        setStoreText(event.target.value)
    }

    const handleSave = () => {
      handleAddNote(storeText);
      
      const updatedNotes = [...notes, { id: nanoid(), text: storeText, 
        date: date.toLocaleDateString() }];
      localStorage.setItem("notepad-data", JSON.stringify({ notes: updatedNotes }));
      setStoreText("");
    };
    
    const date = new Date()
    

  return (
    <div className="note new-note">
        <textarea  
         cols="10"
         rows="10" 
         placeholder="Type to add your NOTE..."
         value={storeText}
         onChange = {handleChange}
         ></textarea>
        <div className="note-footer">
            <small> {date.toLocaleDateString()} </small>
            <button onClick={handleSave} className="save" > SAVE </button>


        </div>
      
    </div>
  )
}

export default AddNote
