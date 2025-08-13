const TextAreaInput = ({ value, label, onChange, name, required=false }) => {
    return (
        <div className="mb-4">
                        <label
                            htmlFor={label}
                            className="block semi-bold"
                        >
                           {label}
                        </label>
                        <textarea
                            name={name}
                            className="w-full p-2 border rounded-lg"
                            value={value}
                            onChange={onChange}
                            required={required}
                        >

                        </textarea>
                    </div>
     );
}

export default TextAreaInput;