import Star from './Star';
import Modal from './Modal';
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
        if (rating > 0) {
            setSubmitted(true);

        }
    };

    const closeModal = () => {
        console.log(`You closed the modal after rating ${rating} star${rating > 1 ? 's' : ''}`);
        setSubmitted(false);
        setRating(0);
        setHover(0);

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

            <Modal
                isOpen={submitted}
                onClose={closeModal}
                rating={rating}
            />

        </>
    );
};

export default Rating;