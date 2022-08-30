import './CurrentWeather.css'

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city"></p>Wellington
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png"></img>
      </div>
      <div className="bottom">
        <p className="temperature">21°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label"></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">20°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">50km/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">25%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">100 hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
