import { WiDayRainWind, WiStrongWind, WiHumidity } from 'react-icons/wi';
import { BiMap, BiChevronUp } from 'react-icons/bi';
import { AppStyle, GlobalStyle } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppStyle className="App">
        <div className="container">
          <p className="location">
            <BiMap />
            Athens
          </p>
          <div className="info">
            <p className="temperature">15°C</p>
            <p className="humidity">
              <WiHumidity />
              50%
            </p>
            <p className="wind">
              <WiStrongWind />
              5m/s
            </p>
          </div>
          <WiDayRainWind className="icon" />
          <div className="details">
            <BiChevronUp class="button" role="button" />
          </div>
        </div>
      </AppStyle>
    </>
  );
}

export default App;
