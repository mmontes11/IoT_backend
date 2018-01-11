export default {
    measurementRequestWithInvalidMeasurementA: {
        measurement: {
            value: 10
        },
        thing: {
            name: 'raspberry',
            geometry : {
                type : 'Point',
                coordinates : [
                    -8.4065665,
                    43.3682188
                ]
            }
        }
    },
    measurementRequestWithInvalidThing: {
        measurement: {
            type: 'temperature',
            unit: {
                name: 'degrees',
                symbol: '°C'
            },
            value: 10
        },
        thing: {
            geometry : {
                type : 'Point',
                coordinates : [
                    -8.4065665,
                    43.3682188
                ]
            }
        }
    },
    measurementRequestWithThingWithInvalidGeometry: {
        measurement : {
            type: 'temperature',
            unit: {
                name: "degrees",
                symbol: "°C"
            },
            value: 10
        },
        thing: {
            name: 'raspberry',
            geometry : {
                coordinates : [
                    -8.4065665,
                    43.3682188
                ]
            }
        }
    },
    validMeasurementRequestWithThingInCoruna: {
        measurement: {
            type: 'temperature',
            unit: {
                name: 'degrees',
                symbol: '°C'
            },
            value: 10
        },
        thing: {
            name: 'raspi-coruna',
            geometry : {
                type : 'Point',
                coordinates : [
                    -8.4065665,
                    43.3682188
                ]
            }
        }
    },
    validMeasurementRequestWithThingInNYC: {
        measurement: {
            type: 'temperature',
            unit: {
                name: 'degrees',
                symbol: '°C'
            },
            value: 10
        },
        thing: {
            name: 'raspi-nyc',
            geometry : {
                type : 'Point',
                coordinates : [
                    -74.25,
                    40.69
                ]
            }
        }
    },
    temperatureMeasurement: {
        thing: 'raspberry',
        type: 'temperature',
        unit: {
            name: 'degrees',
            symbol: '°C'
        },
        value: 10
    },
    temperatureMeasurement2: {
        thing: 'raspberry',
        type: 'temperature',
        unit: {
            name: 'degrees',
            symbol: '°C'
        },
        value: 15
    },
    temperatureMeasurement3: {
        thing: 'raspberry',
        type: 'arduino',
        unit: {
            name: 'degrees',
            symbol: '°C'
        },
        value: 15
    },
    humidityMeasurement: {
        thing: 'raspberry',
        type: 'humidity',
        unit: {
            name: 'relative',
            symbol: '%'
        },
        value: 0.3
    },
    humidityMeasurement2: {
        thing: 'raspberry',
        type: 'humidity',
        unit: {
            name: 'relative',
            symbol: '%'
        },
        value: 0.6
    },
    humidityMeasurement3: {
        thing: 'arduino',
        type: 'humidity',
        unit: {
            name: 'relative',
            symbol: '%'
        },
        value: 0.6,
    }
};