const Star = ({ star, rating, hover, color, testFunction }) => {
    return (
        <span
            onClick={testFunction}
        >
            {'\u2605'}
        </span>  );
}

export default Star;