const TextInput = ({ label, name, value, onChange, required = false}) => {
    return (
        <div className="mb-4">
                        <label
                            htmlFor={name}
                            className="block semi-bold"
                        >
                            {label}
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            name={name}
                            value={value}
                            onChange={onChange}
                            required={required}
                        >

                        </input>
                    </div>
    );
}

export default TextInput;