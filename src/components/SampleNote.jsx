import { MdDeleteForever } from "react-icons/md";


const SampleNote = () => {
  return (
    <div className="note">
        <h4> Life Doesn't have to be perfect. It just has to be lived... </h4>
        <div className="note-footer">
            <small> 3/3/2000 </small>
            <MdDeleteForever className="delete-icon" style={{cursor:'auto'}}/>
        </div>
      
    </div>
  )
}

export default SampleNote
