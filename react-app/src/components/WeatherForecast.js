import React from "react";
import {Container, Card, CardImg} from "react-bootstrap";

import {useWeathers} from "../context/WeatherForecastContext";


function WeatherForecast() {
    const {weathers} = useWeathers();

    return (
        <div>
            <Container>
                {
                    Array.isArray(weathers) ?
                        (
                            weathers.map((item) =>
                                <Card style={{width: '19rem',border:`1px solid grey`}} key={item.id}>
                                    <CardImg variant="top" src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}/>
                                    <Card.Body style={{textAlign: 'center'}}>
                                        <Card.Title>
                                            {item.main}
                                        </Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        ) : ("Kayıt Bulunamadı...")
                }

            </Container>
        </div>
    )

}

export default (WeatherForecast);
