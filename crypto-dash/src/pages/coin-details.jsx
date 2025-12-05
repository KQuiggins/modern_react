import { useState, useEffect } from "react";
import { useParams } from "react-router";

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
                console.log(data);
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
        <h1>Coin Details for {id}</h1>
     );
}

export default CoinDetailsPage;