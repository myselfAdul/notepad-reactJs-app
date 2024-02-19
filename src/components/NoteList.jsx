import AddNote from "./AddNote"
import Note from "./Note"
import SampleNote from "./SampleNote"


const NoteList = ({notesprop, handleAddNote, handleDeleteNote, notes}) => {
  return (
    <div className="notes-list " >
      <SampleNote/>

      {notesprop.map((note) => (
        <Note 
          id = {note.id}
          text= {note.text}
          date= {note.date}
          handleDeleteNote = {handleDeleteNote} />
      ))}
      <AddNote handleAddNote={handleAddNote} notes= {notes} />
        
    </div>
    
  )
}

export default NoteList
