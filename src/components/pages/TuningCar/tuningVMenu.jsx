import React from 'react'
import { ImageOfOffer, OrderSort, Orders } from '../motors/style';
import { Link } from 'react-router-dom';
const BASEURL = "http://localhost:5050/api/v1/";

const TuningVMenu = () => {
  const [allData, setAllData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}tuning/getAllTuning`);
        const tuning = await response.json();
        setAllData(tuning.data);
      } catch (error) {
        console.log("Tuning data is wrong:", error);
      }
    };
    fetchData();
  }, []);
    return (
      <OrderSort>
        {allData.map((data) => {
          return (
            <Link to={`/aidal/${data.id}`}>
              <Orders key={data.id}>
                <ImageOfOffer />
                <h1>{data.name}</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "40px",
                  }}
                >
                  <p>{data.company}</p>
                  <p>{data.date}</p>
                </div>
                <h2>{data.cost}</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <a href="/orders">Oreder</a>
                  <a href="/comparemodels">Compare</a>
                </div>
              </Orders>
            </Link>
          );
        })}
      </OrderSort>
    );
  };

export default TuningVMenu;