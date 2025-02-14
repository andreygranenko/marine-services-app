import {createClient} from "contentful";
import EngineTile from "../components/EngineTile"
import {getEngines} from "@/lib/utils";




const engines = [
    {
        id: "1",
        name: "Outboard Engine 150HP",
        type: "gasoline",
        mounting_type: "wall-mounted",
        category: "New engines",
        price: 12999.99,
        power: 150,
        torque: 200.5,
        fuel_capacity: 60.5,
        weight: 230.5,
        dimensions: {
            length: 72.5,
            width: 30.2,
            height: 20.1,
        },
        efficiency_rating: 4.2,
        cooling_system: "Water-cooled",
        noise_level: 85.5,
    },
    {
        id: "2",
        name: "Electric Inboard 100kW",
        type: "electric",
        mounting_type: "built-in",
        category: "Electric engines",
        price: 15999.99,
        power: 134,
        torque: 250.0,
        voltage: 400,
        weight: 180.0,
        dimensions: {
            length: 65.0,
            width: 28.5,
            height: 22.0,
        },
        efficiency_rating: 4.8,
        cooling_system: "Liquid-cooled",
        noise_level: 65.0,
    },
    {
        id: "3",
        name: "Compact Outboard 50HP",
        type: "gasoline",
        mounting_type: "wall-mounted",
        category: "Compact engines",
        price: 5999.99,
        power: 50,
        torque: 80.5,
        fuel_capacity: 25.0,
        weight: 100.5,
        dimensions: {
            length: 50.0,
            width: 22.5,
            height: 15.5,
        },
        efficiency_rating: 3.9,
        cooling_system: "Air-cooled",
        noise_level: 78.5,
    },
    {
        id: "4",
        name: "High-Performance Electric 200kW",
        type: "electric",
        mounting_type: "built-in",
        category: "High-performance engines",
        price: 24999.99,
        power: 268,
        torque: 400.0,
        voltage: 800,
        weight: 250.0,
        dimensions: {
            length: 80.0,
            width: 35.0,
            height: 25.0,
        },
        efficiency_rating: 4.9,
        cooling_system: "Liquid-cooled",
        noise_level: 70.0,
    },
]

export default async function ShopPage() {
    const engines = await getEngines();

    console.log(engines[0].fields.slug, 'engines');
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-center">Shop</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {engines.map((engine) => (
                    <EngineTile key={engine.fields.slug} engine={engine.fields} />
                ))}
            </div>
        </div>
    )
}

