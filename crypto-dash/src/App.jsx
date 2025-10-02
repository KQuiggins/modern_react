import { useState, useEffect } from "react";
const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

        setCoins(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);





  return (
    <div>
      <h1>🚀🧑‍🚀 Crypto Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <main className="grid">
          {coins.map((coin) => (
            <div className="coin-card" key={coin.id}>
              <div className="coin-header">
                <img src={coin.image} alt={coin.name} className="coin-image" />
                <div>
                  <h2>{coin.name}</h2>
                  <span className="symbol">{coin.symbol.toUpperCase()}</span>
                </div>

              </div>
              <p>Price: ${coin.current_price}</p>
              <p className={coin.price_change_percentage_24h >= 0 ? "positive" : "negative"}>
                {coin.price_change_percentage_24h.toFixed(2)}% 24h
              </p>
              <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
            </div>
          ))}
        </main>
      )}
    </div>
  );
};

export default App;