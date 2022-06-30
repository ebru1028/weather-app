import {CitiesProvider} from "./context/CitiesContext";
import {WeatherForecastProvider} from "./context/WeatherForecastContext";
import Container from "./components/Container";

function App() {
    return (
        <div>
            <CitiesProvider>
                <WeatherForecastProvider>
                    <Container/>
                </WeatherForecastProvider>
            </CitiesProvider>
        </div>
    );
}

export default App;
