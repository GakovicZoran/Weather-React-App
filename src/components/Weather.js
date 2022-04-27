import "./Weather.css";

function Weather({ data }) {
  if (data !== "")
    return (
      <div className="weather-container">
        {data.forecast
          ? data.forecast.forecastday.map((forecast) => (
              <div className="weather-item " key={Math.random() * 1000}>
                <p className="city-name">{data.location.name}</p>
                <div className="date">
                  <p>{forecast.date}</p>
                </div>
                <div className="weather-icon">
                  <img
                    src={forecast.day.condition.icon}
                    alt="Weather icon"
                  ></img>
                </div>
                <div className="temperatures">
                  <p>{forecast.day.avgtemp_c}&deg;</p>
                  <div className="max-min-temp">
                    <div className="max-temp">
                      {forecast.day.maxtemp_c}&deg;
                    </div>
                    <div className="min-temp">
                      {forecast.day.mintemp_c}&deg;
                    </div>
                  </div>
                </div>
                <div className="sky-info">{forecast.day.condition.text}</div>
              </div>
            ))
          : ""}
      </div>
    );
}

export default Weather;
