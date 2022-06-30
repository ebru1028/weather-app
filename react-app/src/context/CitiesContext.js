import {createContext, useState, useEffect, useContext} from "react";
import axios from "axios";

const CitiesContext = createContext();

export const CitiesProvider = ({children}) => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        async function getAllCities() {
            const {data} = await axios.get(`http://localhost:3000/cities`);
            setCities(data);
        }
        getAllCities();
    }, []);

    const values = {
        cities,
        setCities
    }

    return (
        <CitiesContext.Provider value={values}>{children}</CitiesContext.Provider>
    );
};

export const useCities = () => useContext(CitiesContext);
 

