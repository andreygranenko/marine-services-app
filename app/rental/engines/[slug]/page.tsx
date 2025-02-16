import { notFound } from "next/navigation"
import Image from "next/image"
import {getEngines} from "@/lib/utils";
import EngineContactForm from "@/app/components/EngineContactForm";

export default async function EnginePageForRent({ params }: { params: { slug: string } }) {

    const engines = await getEngines();
    const engine = engines.find((e) => e.fields.slug === params.slug);

    console.log(engine, 'checkin')

    const {name, type, transactionType, mounting_type, category, price, power, weight, description} = engine.fields;
    const featuredImageUrl = engine.fields.featuredImage.fields.file.url;
    const featuredImageAlt = engine.fields.featuredImage.fields.title;
    if (!engine) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Image
                        src={`https:${featuredImageUrl}`}
                        alt={featuredImageAlt}
                        width={400}
                        height={400}
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
                <div className={'flex flex-col '}>
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{name}</h1>
                        <p className="text-gray-600 mb-4">{category}</p>
                    </div>

                    <p className="text-2xl font-bold text-blue-600 mb-6">{price}€</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="font-semibold">Type:</p>
                            <p>{type}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Mounting:</p>
                            <p>{mounting_type}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Power:</p>
                            <p>{power} HP</p>
                        </div>
                        <div>
                            <p className="font-semibold">Weight:</p>
                            <p>{weight} kg</p>
                        </div>
                        <div className={'col-span-2'}>
                            <p className={'font-semibold'}>Description:</p>
                            <p>{description}</p>
                        </div>
                    </div>
                    <EngineContactForm rental={true} engineName={name} />
                </div>
            </div>
        </div>
    )
}

