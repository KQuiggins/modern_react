function NoteList({ notes }) {


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
                    <div key={note.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md mb-2">

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

                    </div>
                ))}
            </ul>
        </div>
    );



}

export default NoteList;