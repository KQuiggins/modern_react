import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {

    const [formData, setFormData] = useState({
        title: "",
        priority: "Medium",
        category: "Work",
        description: ""
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.description) {
            alert("Please fill in all fields");
            return;
        }

        const newNote = {
            id: Date.now(),
            ...formData
        };
        setNotes([newNote, ...notes]);

        setFormData({
            title: "",
            priority: "Medium",
            category: "Work",
            description: ""
        });
    };

    const handleChange = (e) => {
        console.log(e.target.value);


        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    return (
        <>
            <button onClick={() => setIsFormVisible(!isFormVisible)} className="px-4 py-2 text-white bg-gray-400 rounded-md mb-2 border-black cursor-pointer hover:bg-gray-600">{!isFormVisible ? "Hide Form ❌" : "Add Note ➕"}</button>
            {isFormVisible && (
                <form className="mb-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="Title"
                            className="block semi-bold"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        >

                        </input>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="priority"
                            className="block semi-bold"
                        >
                            Priority
                        </label>
                        <select
                            name="priority"
                            className="w-full p-2 border rounded-lg"
                            value={formData.priority}
                            onChange={handleChange}
                        >
                            <option value="High">🔴 High</option>
                            <option value="Medium">🔴 Medium</option>
                            <option value="Low">🔴 Low</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="category"
                            className="block semi-bold"
                        >
                            Category
                        </label>
                        <select
                            name="category"
                            className="w-full p-2 border rounded-lg"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                            <option value="Ideas">Ideas</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block semi-bold"
                        >
                            Description
                        </label>
                        <textarea
                            name="description"
                            className="w-full p-2 border rounded-lg"
                            value={formData.description}
                            onChange={handleChange}
                        >

                        </textarea>
                    </div>
                    <button className="w-full text-white bg-purple-500 hover:bg-purple-600 py-2 rounded-lg cursor-pointer">Add Note</button>
                </form>
            )}
        </>
    );
};

export default NoteForm;