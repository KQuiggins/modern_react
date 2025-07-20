import {useState } from 'react'

const Rating = () => {
    const [rating, setRating] = useState(0);
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);

    const clicked = (index) => {
        console.log(`You clicked on star number ${index + 1}`);
    }
    return (
        <>
            <h2 className="rating-container">Rate your experience</h2>
            <div className="stars">
                {stars.map((star, index) => {
                    return (
                        <span onClick={() => clicked(index)} key={star} className="star">{`\u2605`}</span>
                    );
                })}
            </div>

        </>
    );
};

export default Rating;