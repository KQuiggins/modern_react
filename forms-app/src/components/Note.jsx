const Note = ({ note, handleDelete }) => {
    return (
        <div
            
            className="p-4 bg-white border-l-8 rounded-lg shadow-md mb-2"
            style={{
                borderLeftColor: note.priority === 'High' ? 'red' :
                    note.priority === 'Medium' ? 'yellow' : 'green'
            }}
        >



            <h3 className="text-lg font-semibold">{note.title}</h3>

            <p className="text-sm text-gray-500">
                <strong>Category:</strong>{note.category}
            </p>
            <p className="text-sm text-gray-500">
                <strong>Priority:</strong>{note.priority}
            </p>
            <p className="mt-2">
                <strong>Description:</strong> {note.description}
            </p>

            <button onClick={() => handleDelete(note.id)} className="mt-3 rounded-sm py-2 px-4 border border-gray-300 bg-red-500 text-white hover:bg-red-900 shadow-2xl cursor-pointer">🚮 Delete</button>

        </div>
    );
};

export default Note;