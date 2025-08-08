import { useState } from "react";

const NoteForm = () => {

    const [formData, setFormData] = useState({
        title: "",
        priority: "Medium",
        category: "Work",
        description: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        console.log(e.target.value);


        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    return (
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
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    value={formData.description}
                    onChange={handleChange}
                >

                </textarea>
            </div>
            <button className="w-full text-white bg-purple-500 hover:bg-purple-600 py-2 rounded-lg cursor-pointer">Add Note</button>
        </form>
     );
}

export default NoteForm;