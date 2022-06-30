import axios from "axios";

import {useEffect, useState} from "react";
import {useCities} from "../context/CitiesContext";
import {useWeathers} from "../context/WeatherForecastContext";

import {Container, Row, Col, Form} from "react-bootstrap";

function CityDropdown() {
    const {cities} = useCities();
    const [cityId, setCityId] = useState();
    const {city, setCity} = useWeathers();
    
    useEffect(() => {
        const selectedCity = JSON.parse(localStorage.getItem('city') || "{}");
        setCityId(selectedCity.id);
    }, [cityId]);
    
    const handleChange = event => {
        axios.get(`http://localhost:3000/cities?id=${event.target.value}`)
            .then(res => {
                localStorage.setItem("city", JSON.stringify(res.data[0]));
                setCityId(event.target.value);
                 setCity(res.data[0]);
            }
         );
    };
    
    return (
        <div>
            <Container>
                <Row mt={30} style={{ marginTop: 50 }}>
                    <Col md={3} lg={3}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Şehir Seçiniz...</Form.Label>
                                <Form.Select aria-label="Default select example" value={cityId} onChange={handleChange}>
                                    {
                                        cities.map((item) =>
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        )
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default (CityDropdown);

