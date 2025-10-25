const FilterInput = ({ filter, onChangeFilter}) => {
    return (
        <div className="filter">
            <input
                type="text"
                value={filter}
                onChange={(e) => onChangeFilter(e.target.value)}
                placeholder="Filter coins by name or symbol..."
            />
        </div>
    );
}

export default FilterInput;