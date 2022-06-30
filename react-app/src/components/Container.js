import Header from "./Header";
import CityDropdown from "./CityDropdown";
import WeatherForecast from "./WeatherForecast";

function Container(){
    
    return(
        <div>
            <Header/>
            <CityDropdown/>
            <WeatherForecast/>
        </div>
    );
}

export default Container;