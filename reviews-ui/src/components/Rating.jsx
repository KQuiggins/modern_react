import {useState } from 'react'



const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const feedbackMessages = [
        "Poor",
        "Fair",
        "Good",
        "Very Good",
        "Excellent"
    ];

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
                        <span
                            onClick={() => setRating(star)}
                            key={star}
                            className={`star ${star <= (hover || rating) ? 'active' : ''}`}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}

                        >
                                {`\u2605`}
                        </span>
                    );
                })}
            </div>
            <p className="feedback-message">
                {rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]} </p>}
            </p>

        </>
    );
};

export default Rating;