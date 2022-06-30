import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const WeatherForecastContext = createContext();

export const WeatherForecastProvider = ({children}) => {
    
    const [city, setCity] = useState(JSON.parse(localStorage.getItem('city') || "{}"));
    const [weathers, setWeathers] = useState({});
    
    useEffect(() => {
        async function getAllWeather() {
            
            if(city.latitude && city.longitude) {
                await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=6bb9f909d30c882e5d3e622481522ee8`)
                    .then(res => {
                        setWeathers(res.data.weather);
                    });
                 }
            }
            getAllWeather();
        
    }, [city]);
    
    const values = {
        weathers,
        setWeathers,
        city,
        setCity
    }
    
    return (
        <WeatherForecastContext.Provider value={values}>{children} </WeatherForecastContext.Provider>
    );

};

export const useWeathers = () => useContext(WeatherForecastContext);