import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale
);

const API_URL = import.meta.env.VITE_COIN_DETAIL_URL;

const CoinChart = ({ coinId }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect fired", { coinId });

    const fetchChartData = async () => {


      try {
        const url = `${API_URL}/${coinId}/market_chart?vs_currency=usd&days=7`;


        const response = await fetch(url);
        const data = await response.json();

        const prices = data.prices.map((price) => ({
          x: price[0],
          y: price[1],
        }));
        console.log(prices);

        setChartData({
          datasets: [
            {
              label: "Price in USD",
              data: prices,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
              tension: 0.3,
              pointRadius: 0,
            },
          ],

        });

      } catch (e) {

        setError(e?.message ?? String(e));
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [coinId]);

  if (loading) return <div>Loading chart...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div style={{ marginTop: '30px', }}>
    <Line
      data={chartData}
      options={{
        responsive: true,
        plugins: {
          display: false,
          tooltip: {
            mode: 'index',
            intersect: false,
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
            ticks: {
              autoskip: true,
              maxTicksLimit: 7,
            }
          },
          y: {
            ticks: {
              callback: (value) => `$${value.toFixed(2)}`,
            },
          }
        }
      }}
    />
  </div>;
};

export default CoinChart;
