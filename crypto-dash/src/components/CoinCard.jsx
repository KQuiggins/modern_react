import { Link } from "react-router";

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="coin-card">
        <div className="coin-header">
          <img src={coin.image} alt={coin.name} className="coin-image" />
          <div>
            <h2>{coin.name}</h2>
            <span className="symbol">{coin.symbol.toUpperCase()}</span>
          </div>
        </div>
        <p>Price: ${coin.current_price}</p>
        <p
          className={
            coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}% 24h
        </p>
        <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default CoinCard;
