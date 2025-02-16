import {getEngines} from "@/lib/utils";
import EngineTile from "@/app/components/EngineTile";

const RentalEnginesPage = async () => {
    const engines = await getEngines();
    const rentEngines = engines.filter((engine) => engine.fields.transactionType === 'Rent' || engine.fields.transactionType === "Both");

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-center">Rental of spare parts and engines</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {rentEngines.map((engine) => (
                    <EngineTile path={'/rental/engines'} key={engine.fields.slug} engine={engine.fields} />
                ))}
            </div>
        </div>
    )
}

export default RentalEnginesPage;