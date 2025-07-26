const Star = ({
    star,
    rating,
    hover,
    color,
    ratingClick,
    hoverEnter,
    hoverLeave
 }) => {
    return (
        <span
            onClick={() => ratingClick(star)}
            style={{ color: star <= (hover || rating) ? color : '#ccc', cursor: 'pointer' }}
            onMouseEnter={() => {hoverEnter(star)}}
            onMouseLeave={hoverLeave}
        >
            {'\u2605'}
        </span>);
};

export default Star;