import Star from './Star';
import { useState } from 'react';



const Rating = ({ heading, color }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const feedbackMessages = [
        "Poor",
        "Fair",
        "Good",
        "Very Good",
        "Excellent"
    ];

    const stars = Array.from({ length: 5 }, (_, i) => i + 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( rating > 0) {
            setSubmitted(true);

        }
    };


    const clicked = (index) => {
        console.log(`You clicked on star number ${index + 1}`);
    };
    return (
        <>
            <h2 className="rating-container">{heading}</h2>
            <div className="stars">
                {stars.map((star, index) => {
                    return (
                        <Star
                            star={star}
                            key={star}
                            color={color}
                            rating={rating}
                            hover={hover}
                            ratingClick={setRating}
                            hoverEnter={setHover}
                            hoverLeave={() => setHover(null)}
                        />

                    );
                })}
            </div>
            <div className="feedback-submit-container">
                <p className="feedback-message">
                    {rating > 0 && <span className='feedback'>{feedbackMessages[rating - 1]} </span>}
                </p>
                <button
                    className='submit-btn'
                    onClick={handleSubmit} disabled={rating === 0}>Submit</button>
            </div>

        </>
    );
};

export default Rating;