import Image from "next/image"
import Link from "next/link"
import type React from "react" // Added import for React

interface EngineDimensions {
    length: number
    width: number
    height: number
}

interface EngineData {
    id: string
    name: string
    type: "Electric" | "Combustion" | "Hybrid"
    mounting_type: "Inboard" | "Outboard"
    category: string
    price: number
    power: number
    weight: number

}

interface EngineTileProps {
    engine: EngineData
}

const EngineTile: React.FC<EngineTileProps> = ({ engine }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <Image
                src={`/placeholder.svg?height=200&width=200`}
                alt={engine.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{engine.name}</h2>
            <p className="text-gray-600 mb-2">{engine.category}</p>
            <p className="text-blue-600 font-bold mb-2">${engine.price.toFixed(2)}</p>
            <div className="mb-4">
                <p className="text-sm text-gray-600">Type: {engine.type}</p>
                <p className="text-sm text-gray-600">Mounting: {engine.mounting_type}</p>
                <p className="text-sm text-gray-600">Power: {engine.power} HP</p>
                <p className="text-sm text-gray-600">Weight: {engine.weight} kg</p>
            </div>
            <Link
                href={`/shop/${engine.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center"
            >
                View Details
            </Link>
        </div>
    )
}

export default EngineTile

