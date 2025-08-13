import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

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
                    <TextInput
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <SelectInput
                        label="Priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        options={[
                            { value: "High", label: "🔴 High" },
                            { value: "Medium", label: "🟡 Medium" },
                            { value: "Low", label: "🟢 Low" }
                        ]}
                    />
                    <SelectInput
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        options={[
                            { value: "Work", label: "🔧 Work" },
                            { value: "Personal", label: "🏠 Personal" },
                            { value: "Ideas", label: "💡 Ideas" }
                        ]}
                    />
                    <TextAreaInput
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />

                    <button className="w-full text-white bg-purple-500 hover:bg-purple-600 py-2 rounded-lg cursor-pointer">Add Note</button>
                </form>
            )}
        </>
    );
};

export default NoteForm;