const Star = ({
    star,
    rating,
    hover,
    color,
    ratingClick,
    hoverEnter }) => {
    return (
        <span
            onClick={() => ratingClick(star)}
            style={{ color: star <= (hover || rating) ? color : '#ccc', cursor: 'pointer' }}
            onMouseEnter={() => {
                console.log("hoverEnter called with", star);
                hoverEnter(star);
            }}
        >
            {'\u2605'}
        </span>);
};

export default Star;