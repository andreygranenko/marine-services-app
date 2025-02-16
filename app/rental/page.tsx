import {getEngines} from "@/lib/utils";
import EngineTile from "@/app/components/EngineTile";
import Link from "next/link";

const RentalPage = async () => {

    return (
        <div className={'container mx-auto px-6 lg:px-36 py-16'}>
            <h2 className={'text-4xl font-bold text-center'}>
                What would you like to rent?
            </h2>
            <div className={'flex flex-col lg:flex-row gap-5 mt-8'}>
                <Link href={"/rental/boats"} className={'flex flex-col gap-5 p-10 bg-white rounded-lg shadow-md'}>
                    <img className={'rounded-xl w-full cover'} src="https://matesboat.com.au/wp-content/uploads/2024/03/iStock-174084030.jpg" alt="A boat with people"/>
                    <p className={'mt-auto text-2xl font-semibold ' }>Rent a boat</p>
                </Link>
                <Link href={"/rental/engines"} className={' flex flex-col gap-5 p-10 bg-white rounded-lg shadow-md'}>
                    <img className={'rounded-xl w-full cover'} src="https://mboat.eu/wp-content/uploads/2022/02/yamaha_150.jpg" alt=""/>
                    <p className={'justify-self-end text-2xl font-semibold mt-auto'}>Rent an engine or parts</p>
                </Link>

            </div>

        </div>
    )



}

export default RentalPage