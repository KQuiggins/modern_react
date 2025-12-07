import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

const COIN_DETAIL_URL = import.meta.env.VITE_COIN_DETAIL_URL;


const CoinDetailsPage = () => {
    const { id } = useParams();

    const [coin, setCoin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const response = await fetch(`${COIN_DETAIL_URL}/${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();

                setCoin(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCoin();
    }, [id]);

    return (
        <div className="coin-details-container">
            <Link to="/" className="back-link">⬅️ Back to Home</Link>


            <h1 className="coin-details-title">
                {coin ? `${coin.name} (${coin.symbol.toUpperCase()})` : "Coin Not Found"}
            </h1>

            {loading && <p>"Loading..."</p>}
                {error && <p className="error-message">❌ {error}</p>}

                {!loading && !error && (
                    <>
                        <img
                            src={coin.image.large}
                            alt={coin.name}
                            className="coin-details-image"

                        />

                        <p>{coin.description.en.split(". ")[0] + "."}</p>

                        <div className="coin-details-info">
                            
                        </div>
                    </>
                )}
        </div>
     );
}

export default CoinDetailsPage;