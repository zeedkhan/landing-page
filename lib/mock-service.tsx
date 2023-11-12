interface Service {
    type: string;
    capacity: string;
    transit_time: string;
    destination_countries: string[];
    features: string[]
}

const serviceColumn: string[] = ["Type", "Capacity", "Transit time", "Destinations", "Features"]

const services: Service[] = [
    {
        "type": "20ft Standard Container",
        "capacity": "20 tons",
        "transit_time": "14-21 days",
        "destination_countries": ["Brazil", "Japan", "Australia"],
        "features": ["Standard", "Dry"]
    },
    {
        "type": "40ft Standard Container",
        "capacity": "40 tons",
        "transit_time": "14-21 days",
        "destination_countries": ["Brazil", "Japan", "Australia"],
        "features": ["Standard", "Dry"]
    },
    {
        "type": "40ft High Cube Container",
        "capacity": "40 tons",
        "transit_time": "14-21 days",
        "destination_countries": ["Brazil", "Japan", "Australia"],
        "features": ["Tall", "Dry"]
    },
    {
        "type": "Refrigerated Container",
        "capacity": "Varies",
        "transit_time": "14-21 days",
        "destination_countries": ["Brazil", "Japan", "Australia"],
        "features": ["Temperature-Controlled"]
    },
    {
        "type": "Flat Rack Container",
        "capacity": "Varies",
        "transit_time": "14-21 days",
        "destination_countries": ["Brazil", "Japan", "Australia"],
        "features": ["For Oversized Cargo"]
    }
];

export {
    services,
    serviceColumn
}