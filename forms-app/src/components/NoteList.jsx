import Note from "./Note";

function NoteList({ notes, handleDelete }) {


    if (notes.length === 0) {
        return (
            <div className="text-center text-gray-500">
                <p>No notes available</p>
            </div>
        );
    }




    return (
        <div className="space-y-4">

            <ul>
                {notes.map(note => (
                    <Note key={note.id} note={note} handleDelete={handleDelete} />
                ))}
            </ul>
        </div>
    );



}

export default NoteList;